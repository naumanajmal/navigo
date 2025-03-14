import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableOfContents, setTableOfContents] = useState([]);
  const contentRef = useRef(null);

  // WordPress API base URL
  const WP_API_BASE = '/wp-api/wp/v2';

  useEffect(() => {
    fetchPost();
    fetchCategories();
  }, [slug]);

  // Extract table of contents from the blog content
  useEffect(() => {
    if (post && contentRef.current) {
      const extractHeadings = () => {
        // Create a temporary div to parse the HTML content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content.rendered;

        // Find all list item headers (based on your sample content)
        const headings = [];
        const olElements = tempDiv.querySelectorAll('ol.wp-block-list');
        
        olElements.forEach((ol, index) => {
          // Get the first li which contains the heading
          const li = ol.querySelector('li');
          if (li) {
            const headingText = li.textContent.split('<br>')[0].trim();
            const id = `section-${index + 1}`;
            
            headings.push({
              id,
              text: headingText,
              level: 1, // Main heading
            });
          }
        });
        
        return headings;
      };
      
      setTableOfContents(extractHeadings());
      
      // Add IDs to the content headings for scroll functionality
      setTimeout(() => {
        if (contentRef.current) {
          const content = contentRef.current;
          const olElements = content.querySelectorAll('ol.wp-block-list');
          
          olElements.forEach((ol, index) => {
            ol.id = `section-${index + 1}`;
          });
        }
      }, 100);
    }
  }, [post]);

  // Scroll to section when TOC item is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fetchPost = async () => {
    try {
      const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed`, {
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }

      const data = await response.json();
      console.log('Fetched post:', data); // Debug log
      if (data.length > 0) {
        setPost(data[0]);
        // Fetch related posts after getting the main post
        fetchRelatedPosts(data[0]);
      } else {
        setError('Post not found');
      }
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
      setCategories(data);
    } catch (err) {
      console.error('Categories fetch error:', err);
    }
  };

  const fetchRelatedPosts = async (currentPost) => {
    try {
      // Get the categories of the current post
      const postCategories = currentPost._embedded?.['wp:term']?.[0] || [];
      const categoryIds = postCategories.map(cat => cat.id).join(',');

      if (categoryIds) {
        const response = await fetch(
          `${WP_API_BASE}/posts?categories=${categoryIds}&exclude=${currentPost.id}&per_page=3&_embed`,
          {
            headers: {
              'Accept': 'application/json',
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch related posts');
        }

        const data = await response.json();
        setRelatedPosts(data);
      }
    } catch (err) {
      console.error('Related posts fetch error:', err);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-3xl text-primary">Blog post not found</h1>
          <Link to="/blog" className="text-secondary hover:underline mt-4 inline-block">
            ← Back to Blog
          </Link>
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
                  <li key={category.id}>
                    <Link 
                      to={`/blog?category=${category.slug}`} 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Related Posts</h3>
                <div className="space-y-3">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <h4 
                        className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 order-1 lg:order-2">
            {/* Title */}
            <h1 
              className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Meta Information */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              {post._embedded?.['wp:term']?.[0] && (
                <>
                  <span className="mx-2">•</span>
                  <span>{post._embedded['wp:term'][0].map(term => term.name).join(', ')}</span>
                </>
              )}
            </div>

            {/* Featured Image */}
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <div className="mb-8">
                <img
                  src={getPostImage(post)}
                  alt={post.title.rendered}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Content with Table of Contents */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Blog Content */}
              <div 
                ref={contentRef}
                className="prose prose-lg max-w-none text-gray-700 lg:flex-1"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.rendered 
                }}
              />
              
              {/* Table of Contents - Right Side */}
              {tableOfContents.length > 0 && (
                <div className="w-full lg:w-72 mt-8 lg:mt-0">
                  <div className="sticky top-24 bg-white shadow-sm rounded-xl p-5">
                    <h3 className="text-xl font-bold text-primary mb-4">Table of Contents</h3>
                    <nav className="toc-nav">
                      <ul className="space-y-3">
                        {tableOfContents.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className="text-gray-600 hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-all w-full text-left"
                            >
                              {item.text}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>

            {/* Add custom styles for WordPress content */}
            <style jsx global>{`
              .prose ul {
                list-style-type: disc;
                margin-left: 1.5em;
                margin-bottom: 1.5em;
              }
              .prose ol {
                list-style-type: decimal;
                margin-left: 1.5em;
                margin-bottom: 1.5em;
              }
              .prose li {
                margin-bottom: 0.5em;
              }
              .prose p {
                margin-bottom: 1.5em;
              }
              .prose h2, .prose h3, .prose h4 {
                color: #1a365d;
                margin-top: 2em;
                margin-bottom: 1em;
                font-weight: 600;
              }
              .prose a {
                color: #2563eb;
                text-decoration: underline;
              }
              .prose a:hover {
                color: #1d4ed8;
              }
              .wp-block-list {
                margin-bottom: 1.5em;
              }
            `}</style>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
