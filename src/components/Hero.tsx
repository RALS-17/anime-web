import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onStartClick: () => void
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="relative h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-r from-secondary to-primary">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Discover Your Next <span className="text-accent">Anime Adventure</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          Explore thousands of anime series, from classic masterpieces to the latest releases. Find your next favorite show with our intelligent recommendations.
        </p>

        <button
          onClick={onStartClick}
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-gray-900 font-bold rounded-full hover:scale-105 hover:shadow-xl transition-all hover:shadow-accent/50"
        >
          Start Exploring
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-0" />
    </section>
  )
}
