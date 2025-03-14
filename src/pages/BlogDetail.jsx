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
      console.log('Extracting table of contents...');
      
      // This will run after the content is rendered with dangerouslySetInnerHTML
      const extractHeadings = () => {
        const content = contentRef.current;
        if (!content) return [];
        
        console.log('Content ref exists, searching for sections...');
        
        // Find paragraphs with strong text
        const paragraphs = content.querySelectorAll('p strong');
        console.log('Found paragraphs with strong text:', paragraphs.length);
        
        const headings = [];
        
        paragraphs.forEach((p, index) => {
          if (p && p.textContent.trim()) {
            // Find the parent paragraph
            const paragraph = p.closest('p');
            if (paragraph) {
              const id = `section-${index + 1}`;
              paragraph.id = id;
              
              headings.push({
                id,
                text: p.textContent.trim(),
                index: index + 1
              });
              
              console.log(`Added paragraph section ${id}: ${p.textContent.trim()}`);
            }
          }
        });
        
        return headings;
      };
      
      // Initial extraction attempt
      let headings = extractHeadings();
      if (headings.length > 0) {
        console.log('Setting table of contents with', headings.length, 'items');
        setTableOfContents(headings);
      } else {
        // If no headings found initially, use MutationObserver to wait for content to load
        console.log('No headings found initially, setting up MutationObserver');
        
        const observer = new MutationObserver(() => {
          headings = extractHeadings();
          if (headings.length > 0) {
            console.log('MutationObserver found headings, setting table of contents');
            setTableOfContents(headings);
            observer.disconnect();
          }
        });
        
        observer.observe(contentRef.current, { childList: true, subtree: true });
        
        // Fallback with timeout in case MutationObserver doesn't catch everything
        setTimeout(() => {
          if (tableOfContents.length === 0) {
            console.log('Timeout reached, trying one more extraction');
            headings = extractHeadings();
            if (headings.length > 0) {
              console.log('Final extraction found headings, setting table of contents');
              setTableOfContents(headings);
            } else {
              console.log('No headings found after all attempts');
            }
          }
          observer.disconnect();
        }, 2000);
        
        return () => observer.disconnect();
      }
    }
  }, [post, tableOfContents.length]);

  // Create a separate effect to assign IDs after content is rendered
  useEffect(() => {
    if (tableOfContents.length > 0 && contentRef.current) {
      console.log('Assigning IDs to sections based on table of contents');
      
      // Find paragraphs with strong text that match our table of contents
      const paragraphs = contentRef.current.querySelectorAll('p strong');
      
      tableOfContents.forEach(item => {
        // Find the paragraph with matching text
        let matchFound = false;
        
        paragraphs.forEach(p => {
          if (p.textContent.trim() === item.text) {
            const paragraph = p.closest('p');
            if (paragraph) {
              paragraph.id = item.id;
              console.log(`Assigned ID ${item.id} to paragraph with text: ${item.text}`);
              matchFound = true;
            }
          }
        });
        
        if (!matchFound) {
          console.log(`Could not find matching paragraph for: ${item.text}`);
        }
      });
    }
  }, [tableOfContents]);

  // Scroll to section when TOC item is clicked
  const scrollToSection = (id) => {
    console.log('Scrolling to section:', id);
    
    // Re-assign IDs just before scrolling to ensure they exist
    if (contentRef.current && tableOfContents.length > 0) {
      const paragraphs = contentRef.current.querySelectorAll('p strong');
      
      tableOfContents.forEach(item => {
        if (item.id === id) {
          // Find the paragraph with matching text
          paragraphs.forEach(p => {
            if (p.textContent.trim() === item.text) {
              const paragraph = p.closest('p');
              if (paragraph) {
                paragraph.id = item.id;
                console.log(`Re-assigned ID ${item.id} to paragraph before scrolling`);
              }
            }
          });
        }
      });
    }
    
    const element = document.getElementById(id);
    console.log('Found element:', element);
    
    if (element) {
      // Get the navbar height to use as offset
      const navbar = document.querySelector('nav') || { offsetHeight: 80 };
      const navbarHeight = navbar.offsetHeight || 80;
      console.log('Navbar height:', navbarHeight);
      
      // Scroll to the element with offset for navbar
      const yOffset = -(navbarHeight + 20); // Additional 20px buffer
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      console.log('Scrolling to position:', y);
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Add a highlight effect
      element.classList.add('highlight-section');
      setTimeout(() => {
        element.classList.remove('highlight-section');
      }, 2000);
    } else {
      console.error(`Element with id ${id} not found`);
      
      // Debug: list all IDs in the document
      const allElements = document.querySelectorAll('[id]');
      console.log('All elements with IDs:', Array.from(allElements).map(el => ({ id: el.id, tagName: el.tagName })));
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
                              className="text-gray-600 hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-all duration-300 w-full text-left"
                            >
                              {item.index}. {item.text}
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
              .prose h2, .prose h3, .prose h4, .prose h5, .prose h6,
              .wp-block-heading {
                color: #1a365d;
                margin-top: 2em;
                margin-bottom: 1em;
                font-weight: 600;
                scroll-margin-top: 100px; /* Add scroll margin for better positioning */
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
                scroll-margin-top: 100px; /* Add scroll margin for better positioning */
              }
              .highlight-section {
                animation: highlight-fade 2s ease-in-out;
              }
              @keyframes highlight-fade {
                0%, 15% { background-color: rgba(59, 130, 246, 0.2); }
                100% { background-color: transparent; }
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
