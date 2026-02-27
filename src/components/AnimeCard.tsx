import { Heart, MessageCircle, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface AnimeCardProps {
  id: string
  title: string
  image: string
  genre: string
  studioName: string
  studioLogo: string
  year: string
  description: string
  likes: number
  comments: number
  url: string
  index?: number
  isLiked?: boolean
  onLikeClick?: () => void
  onCardClick?: () => void
}

export default function AnimeCard({
  title,
  image,
  genre,
  studioName,
  studioLogo,
  year,
  description,
  likes,
  comments,
  url,
  index = 0,
  isLiked = false,
  onLikeClick,
  onCardClick,
}: AnimeCardProps) {
  const [likeCount, setLikeCount] = useState(likes)

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Increment or decrement based on current state
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
    onLikeClick?.()
  }

  return (
    <div
      onClick={onCardClick}
      style={{ '--card-index': index } as React.CSSProperties}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Genre Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform">
          {genre}
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-4 pb-0 flex-1 flex flex-col">
        {/* Studio Info */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={studioLogo}
            alt={studioName}
            className="w-10 h-10 rounded-full object-cover border-2 border-primary group-hover:scale-110 group-hover:border-secondary transition-all"
          />
          <div>
            <p className="font-semibold text-sm text-gray-900 dark:text-white">{studioName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{year}</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
              isLiked
                ? 'text-primary bg-primary/10'
                : 'text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10'
            }`}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            <span className="text-xs font-medium">{likeCount.toLocaleString()}</span>
          </button>

          {/* Comments Button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-secondary hover:bg-secondary/10 transition-all">
            <MessageCircle size={16} />
            <span className="text-xs font-medium">{comments.toLocaleString()}</span>
          </button>
        </div>

        {/* Visit Link */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 px-3 py-1.5 text-secondary hover:text-secondary-dark text-xs font-medium hover:bg-secondary/10 rounded-full transition-all"
        >
          <ExternalLink size={16} />
          <span className="hidden sm:inline">Visit</span>
        </a>
      </div>
    </div>
  )
}
