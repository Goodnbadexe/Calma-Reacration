import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ExternalLink, Calendar, Heart, MessageCircle, Share2, Linkedin } from 'lucide-react'
import './الأخبار.css'

type LinkedInPost = {
  id: string
  content: string
  author: string
  date: string
  likes: number
  comments: number
  shares: number
  image?: string
  link?: string
}

const mockLinkedInPosts: LinkedInPost[] = [
  {
    id: '1',
    content: 'يسعدنا الإعلان عن اكتمال أحدث مشاريعنا السكنية في الرياض. إنجاز جديد يرسخ رؤيتنا في بناء مساحات تُجسّد الطموح والتميز.',
    author: 'CALMA العقارية',
    date: '2024-01-15',
    likes: 127,
    comments: 23,
    shares: 15,
    image: '/api/placeholder/600/400',
    link: 'https://linkedin.com/company/calmasa'
  },
  {
    id: '2',
    content: 'نواصل التزامنا بالاستدامة عبر دمج تقنيات خضراء متقدمة في جميع مشاريعنا الجديدة. نصمم اليوم لمدن الغد.',
    author: 'CALMA العقارية',
    date: '2024-01-12',
    likes: 89,
    comments: 12,
    shares: 8,
    link: 'https://linkedin.com/company/calmasa'
  },
  {
    id: '3',
    content: 'فخورون بأننا رافقنا أكثر من 2000 أسرة في رحلتهم نحو السكن الأمثل. نحن نبني مجتمعات تنبض بالحياة وتحتضن الإمكانيات.',
    author: 'CALMA العقارية',
    date: '2024-01-10',
    likes: 156,
    comments: 31,
    shares: 22,
    image: '/api/placeholder/600/300',
    link: 'https://linkedin.com/company/calmasa'
  }
]

const newsArticles = [
  {
    id: '1',
    title: 'CALMA تطلق مبادرة تطوير مستدامة جديدة',
    excerpt: 'ريادة في البناء الصديق للبيئة عبر تقنيات خضراء مبتكرة.',
    date: '2024-01-20',
    category: 'استدامة',
    image: '/api/placeholder/400/250'
  },
  {
    id: '2',
    title: 'خطة توسع لعام 2024',
    excerpt: 'نمو استراتيجي في مدن رئيسية مع تركيز على المشاريع السكنية الفاخرة.',
    date: '2024-01-18',
    category: 'أعمال',
    image: '/api/placeholder/400/250'
  },
  {
    id: '3',
    title: 'جائزة للتميز المعماري',
    excerpt: 'CALMA تتلقى تكريمًا مرموقًا لابتكارها في التصميم وجودة التنفيذ.',
    date: '2024-01-15',
    category: 'جوائز',
    image: '/api/placeholder/400/250'
  }
]

export default function ArabicNews() {
  const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLinkedInPosts = async () => {
      setLoading(true)
      await new Promise((r) => setTimeout(r, 1000))
      setLinkedInPosts(mockLinkedInPosts)
      setLoading(false)
    }
    fetchLinkedInPosts()
  }, [])

  const formatDateAr = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  return (
    <main className="news-page" dir="rtl" lang="ar">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="news-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>آخر الأخبار والتحديثات</h1>
            <p>تابع مسيرة CALMA في تشكيل مستقبل التطوير العقاري عبر المملكة العربية السعودية.</p>
          </motion.div>
        </div>
        <div className="hero-gradient" />
      </section>

      <div className="news-container">
        {/* LinkedIn Feed Section */}
        <section className="linkedin-section">
          <div className="section-header">
            <div className="header-content">
              <Linkedin className="linkedin-icon" />
              <div>
                <h2>تحديثات لينكدإن</h2>
                <p>تابع أحدث منشوراتنا وتحديثات الشركة</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="follow-btn"
              onClick={() => window.open('https://www.linkedin.com/company/calmasa/posts/?feedView=all&viewAsMember=true', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              تابعنا على لينكدإن
            </Button>
          </div>

          <div className="linkedin-posts">
            {loading ? (
              <div className="loading-posts">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="post-skeleton">
                    <div className="skeleton-header" />
                    <div className="skeleton-content" />
                    <div className="skeleton-footer" />
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
                          <span className="post-date">{formatDateAr(post.date)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="post-content">
                      <p>{post.content}</p>
                      {post.image && (
                        <div className="post-image">
                          <img src={post.image} alt="صورة المنشور" />
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
                          onClick={() => window.open(post.link!, '_blank')}
                        >
                          عرض على لينكدإن
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
            <h2>أخبار الشركة</h2>
            <p>أحدث الإعلانات والبيانات الصحفية</p>
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
                    <span>{formatDateAr(article.date)}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Button variant="ghost" className="read-more">
                    اقرأ المزيد
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
            <h2>تابع المستجدات</h2>
            <p>اشترك في نشرتنا لتصلك أحدث الأخبار وتحديثات المشاريع</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="ادخل بريدك الإلكتروني"
                className="email-input"
                dir="ltr"
              />
              <Button className="subscribe-btn">اشترك</Button>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  )
}
