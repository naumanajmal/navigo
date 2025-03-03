import { useState, useEffect } from 'react';
import AnimateOnScroll from '../animations/AnimateOnScroll';

function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://navigo.ae/navigoadmin/index.php/wp-json/wp/v2/posts?_embed&per_page=3', {
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      console.log('Fetched posts:', data); // Debug log
      setPosts(data);
    } catch (err) {
      console.error('Blog fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    console.error('Rendering error state:', error);
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Latest Insights</h2>
            <p className="text-gray-600">Our blog section is currently being updated. Please check back later.</p>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Latest Insights</h2>
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with our latest news and insights about mortgage and property financing in the UAE.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <AnimateOnScroll key={post.id} animation="fade-up">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <img 
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 
                    className="text-xl font-semibold mb-3 text-primary"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div 
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-secondary font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
