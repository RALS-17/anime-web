import { useState } from 'react'
import { Menu, X, Moon, Sun, LogIn, Search, LogOut } from 'lucide-react'

interface NavbarProps {
  isDarkMode: boolean
  onThemeToggle: () => void
  onAuthClick: () => void
  onShowToast: (message: string, type: 'success' | 'error' | 'info') => void
  searchQuery: string
  onSearchChange: (query: string) => void
  isLoggedIn: boolean
  currentUser: string | null
  onLogout: () => void
}

export default function Navbar({ 
  isDarkMode, 
  onThemeToggle, 
  onAuthClick, 
  onShowToast,
  searchQuery,
  onSearchChange,
  isLoggedIn,
  currentUser,
  onLogout
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onShowToast(`Searching for: ${searchQuery}`, 'info')
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
              ✦
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AnimeExplorer
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition-colors">
              🔥 Trending
            </a>
            <a href="/" className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition-colors">
              🎨 Genres
            </a>
            <a href="/" className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition-colors">
              📚 My Collection
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search anime..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="px-4 py-2 pr-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <Search size={18} />
              </button>
            </form>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              aria-label="Toggle theme"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>

            {/* Auth Button */}
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{currentUser}</span>
                <button
                  onClick={() => {
                    onLogout()
                    onShowToast('Logged out successfully', 'success')
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all font-medium"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium"
              >
                <LogIn size={18} />
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onThemeToggle}
              aria-label="Toggle theme"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search anime..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-4 py-2 pr-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-primary"
              >
                <Search size={18} />
              </button>
            </form>

            <a href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              🔥 Trending
            </a>
            <a href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              🎨 Genres
            </a>
            <a href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              📚 My Collection
            </a>

            {isLoggedIn ? (
              <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-3">
                <p className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">Logged in as: {currentUser}</p>
                <button
                  onClick={() => {
                    onLogout()
                    setMobileMenuOpen(false)
                    onShowToast('Logged out successfully', 'success')
                  }}
                  className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  onAuthClick()
                  setMobileMenuOpen(false)
                }}
                className="w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all font-medium"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
