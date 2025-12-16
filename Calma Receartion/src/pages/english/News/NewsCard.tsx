import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ExternalLink, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export interface NewsCardProps {
  id: string
  image?: string
  category: string
  date: string
  title: string
  excerpt: string
  link?: string
}

export function NewsCard({
  image,
  category,
  date,
  title,
  excerpt,
  link,
}: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="news-card"
    >
      <Card className="bg-white text-neutral-900 shadow-sm rounded-lg overflow-hidden">
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="category-pill">{category}</div>
          </div>
        )}
        <CardContent className="px-4 py-3">
          <div className="article-meta">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <h3 className="headline line-clamp-2">{title}</h3>
          <p className="summary line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="read-more-row">
          {link && link !== '#' ? (
            <a
              href={link}
              target="_blank"
              rel="noopener"
              className="read-more-link"
              aria-label={`Read more: ${title}`}
            >
              <Button variant="ghost" className="read-more-btn">
                Read More
                <ExternalLink className="w-4 h-4 ml-2 inline-block align-text-bottom" />
              </Button>
            </a>
          ) : (
            <Button variant="ghost" className="read-more-btn" disabled>
              Read More
              <ExternalLink className="w-4 h-4 ml-2 inline-block align-text-bottom" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.article>
  )
}

