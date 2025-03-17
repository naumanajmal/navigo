import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

const BlogArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(['All']);

  // WordPress API base URL
  const WP_API_BASE = import.meta.env.PROD 
    ? 'https://navigo.ae/navigoadmin/index.php/wp-json/wp/v2'
    : '/wp-api/wp/v2';

  useEffect(() => {
    const loadData = async () => {
      await fetchPosts();
      await fetchCategories();
    };
    
    loadData();
  }, [WP_API_BASE]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${WP_API_BASE}/posts?_embed`, {
        headers: {
          'Accept': 'application/json',
        }
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.error('Blog fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${WP_API_BASE}/categories`, {
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }

      const data = await response.json();
      setCategories(['All', ...data.map(cat => cat.name)]);
    } catch (err) {
      console.error('Categories fetch error:', err);
      // Keep the "All" category even if fetch fails
      setCategories(['All']);
    }
  };

  const getPostImage = (post) => {
    // Try to get the featured image
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (featuredImage) return featuredImage;

    // Fallback to thumbnail if available
    const thumbnail = post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.thumbnail?.source_url;
    if (thumbnail) return thumbnail;

    // Final fallback to a default image
    return '/path/to/your/default/image.jpg'; // Replace with your default image path
  };

  const getPostDate = (post) => {
    const date = new Date(post.date);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => {
        const postCategories = post._embedded?.['wp:term']?.[0] || [];
        return postCategories.some(cat => cat.name === selectedCategory);
      });

  if (loading) {
    return (
      <div className="font-lexend min-h-screen bg-gray-50">
        <Navbar />
        <div className="bg-primary text-white pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Blog</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 text-center">
          Loading posts...
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-lexend min-h-screen bg-gray-50">
        <Navbar />
        <div className="bg-primary text-white pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Blog</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          We're currently updating our blog. Please check back later.
        </div>
        <Footer />
      </div>
    );
  }

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
            <div className="hidden md:inline-flex rounded-xl bg-white/80 backdrop-blur-lg ring-1 ring-gray-100 shadow-lg flex-wrap justify-center gap-1">
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
                to={`/blog/${post.slug}`} 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={getPostImage(post)}
                    alt={post.title.rendered}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{getPostDate(post)}</span>
                  </div>
                  <h2 
                    className="text-xl font-bold text-primary mb-3 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                 
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
