import { Heart } from 'lucide-react'

interface FooterProps {
  onContactClick: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                ✦
              </div>
              <span className="font-bold text-lg">AnimeExplorer</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} All rights reserved. Made with <Heart className="inline w-4 h-4 text-primary" />
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <button
              onClick={onContactClick}
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
