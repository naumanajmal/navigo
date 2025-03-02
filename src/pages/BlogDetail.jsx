import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));
  const categories = [...new Set(blogPosts.map(post => post.category))];
  const relatedPosts = blogPosts
    .filter(p => p.category === post?.category && p.id !== parseInt(id))
    .slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-3xl text-primary">Blog post not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-lexend">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-8 sm:pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 lg:flex-shrink-0 order-2 lg:order-1">
            {/* Categories */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <Link 
                      to={`/blog?category=${category}`} 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Posts */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Related Posts</h3>
              <div className="space-y-4">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.id}`}
                    className="block group"
                  >
                    <div className="aspect-video mb-2 overflow-hidden rounded">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 order-1 lg:order-2">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8">
              {post.title}
            </h1>

            {/* Banner Image */}
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                {post.excerpt}
              </p>
              
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                Understanding the Basics
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                Key Takeaways
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
