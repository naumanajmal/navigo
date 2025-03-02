import React, { useState } from 'react';
import { blogPosts } from '../data/blogData';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

const BlogArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="font-lexend min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-primary text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Blog</h1>
          <p className="text-lg text-center text-gray-200 max-w-2xl mx-auto">
            Insights and updates from the world of mortgages and real estate
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className='max-w-7xl mx-auto'>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-10">
          <div className="md:hidden max-w-[400px] mx-auto rounded-xl bg-white/80 backdrop-blur-lg ring-1 ring-gray-100 shadow-lg p-1 overflow-x-auto">
            <div className="inline-flex whitespace-nowrap min-w-full">
            {/* Hide scrollbar */}
            <style jsx>{`
              .overflow-x-auto {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
            </div>
          </div>
          <div className="hidden md:inline-flex rounded-xl bg-white/80 backdrop-blur-lg  ring-1 ring-gray-100 shadow-lg flex-wrap justify-center gap-1">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                
              </div>
            </Link>
          ))}
        </div>
        </div>
        </div>
      <Footer />
    </div>
  );
};

export default BlogArchive;
