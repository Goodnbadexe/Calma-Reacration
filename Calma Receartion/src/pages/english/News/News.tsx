import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Heart, MessageCircle, Share2, Linkedin } from 'lucide-react';
import './News.css';

interface LinkedInPost {
  id: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
  link?: string;
}

// Mock LinkedIn posts data - Replace with actual LinkedIn API integration
const mockLinkedInPosts: LinkedInPost[] = [
  {
    id: '1',
    content: 'Excited to announce the completion of our latest residential project in Riyadh! 🏗️ Another milestone in creating spaces where vision takes shape. #CALMA #RealEstate #Riyadh',
    author: 'CALMA Real Estate',
    date: '2024-01-15',
    likes: 127,
    comments: 23,
    shares: 15,
    image: '/api/placeholder/600/400',
    link: 'https://linkedin.com/company/calmasa'
  },
  {
    id: '2',
    content: 'Our commitment to sustainability continues with the integration of cutting-edge green technologies in all new developments. Building tomorrow\'s communities today! 🌱 #Sustainability #Vision2030',
    author: 'CALMA Real Estate',
    date: '2024-01-12',
    likes: 89,
    comments: 12,
    shares: 8,
    link: 'https://linkedin.com/company/calmasa'
  },
  {
    id: '3',
    content: 'Proud to have connected over 2,000 residents to their dreams. Each project represents more than development – it\'s about creating communities where potential flourishes. ✨',
    author: 'CALMA Real Estate',
    date: '2024-01-10',
    likes: 156,
    comments: 31,
    shares: 22,
    image: '/api/placeholder/600/300',
    link: 'https://linkedin.com/company/calmasa'
  }
];

const newsArticles = [
  {
    id: '1',
    title: 'CALMA Announces New Sustainable Development Initiative',
    excerpt: 'Leading the way in eco-friendly construction with innovative green building technologies.',
    date: '2024-01-20',
    category: 'Sustainability',
    image: '/api/placeholder/400/250'
  },
  {
    id: '2',
    title: 'Expansion Plans Unveiled for 2024',
    excerpt: 'Strategic growth across key Saudi Arabian cities with focus on luxury residential projects.',
    date: '2024-01-18',
    category: 'Business',
    image: '/api/placeholder/400/250'
  },
  {
    id: '3',
    title: 'Award Recognition for Architectural Excellence',
    excerpt: 'CALMA receives prestigious industry award for innovative design and construction quality.',
    date: '2024-01-15',
    category: 'Awards',
    image: '/api/placeholder/400/250'
  }
];

export default function News() {
  const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to LinkedIn
    const fetchLinkedInPosts = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLinkedInPosts(mockLinkedInPosts);
      setLoading(false);
    };

    fetchLinkedInPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="news-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>Latest News & Updates</h1>
            <p>Stay connected with CALMA's journey as we continue to shape the future of real estate development across Saudi Arabia.</p>
          </motion.div>
        </div>
        <div className="hero-gradient"></div>
      </section>

      <div className="news-container">
        {/* LinkedIn Feed Section */}
        <section className="linkedin-section">
          <div className="section-header">
            <div className="header-content">
              <Linkedin className="linkedin-icon" />
              <div>
                <h2>LinkedIn Updates</h2>
                <p>Follow our latest posts and company updates</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="follow-btn"
              onClick={() => window.open('https://www.linkedin.com/company/calmasa/posts/?feedView=all&viewAsMember=true', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Follow on LinkedIn
            </Button>
          </div>

          <div className="linkedin-posts">
            {loading ? (
              <div className="loading-posts">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="post-skeleton">
                    <div className="skeleton-header"></div>
                    <div className="skeleton-content"></div>
                    <div className="skeleton-footer"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="posts-grid">
                {linkedInPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="linkedin-post"
                  >
                    <div className="post-header">
                      <div className="post-author">
                        <div className="author-avatar">
                          <Linkedin className="w-5 h-5" />
                        </div>
                        <div className="author-info">
                          <h4>{post.author}</h4>
                          <span className="post-date">{formatDate(post.date)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="post-content">
                      <p>{post.content}</p>
                      {post.image && (
                        <div className="post-image">
                          <img src={post.image} alt="Post content" />
                        </div>
                      )}
                    </div>

                    <div className="post-engagement">
                      <div className="engagement-stats">
                        <span><Heart className="w-4 h-4" /> {post.likes}</span>
                        <span><MessageCircle className="w-4 h-4" /> {post.comments}</span>
                        <span><Share2 className="w-4 h-4" /> {post.shares}</span>
                      </div>
                      {post.link && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => window.open(post.link, '_blank')}
                        >
                          View on LinkedIn
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* News Articles Section */}
        <section className="news-articles">
          <div className="section-header">
            <h2>Company News</h2>
            <p>Latest announcements and press releases</p>
          </div>

          <div className="articles-grid">
            {newsArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="news-article"
              >
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <div className="article-category">{article.category}</div>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Button variant="ghost" className="read-more">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="newsletter-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="newsletter-content"
          >
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest news and project updates</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
              />
              <Button className="subscribe-btn">Subscribe</Button>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}