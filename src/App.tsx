import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AnimeFeed from './components/AnimeFeed'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import AuthModal from './components/modals/AuthModal'
import ContactModal from './components/modals/ContactModal'
import Toast from './components/Toast'

type ToastType = 'success' | 'error' | 'info'

interface ToastMessage {
  message: string
  type: ToastType
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [toast, setToast] = useState<ToastMessage | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('currentUser')
  })
  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    return localStorage.getItem('currentUser')
  })
  const [likedAnime, setLikedAnime] = useState<string[]>(() => {
    const saved = localStorage.getItem('likedAnime')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  useEffect(() => {
    localStorage.setItem('likedAnime', JSON.stringify(likedAnime))
  }, [likedAnime])

  const handleLogin = (username: string) => {
    setIsLoggedIn(true)
    setCurrentUser(username)
    localStorage.setItem('currentUser', username)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    localStorage.removeItem('currentUser')
  }

  const handleToggleLike = (animeId: string) => {
    setLikedAnime(prev => 
      prev.includes(animeId) 
        ? prev.filter(id => id !== animeId)
        : [...prev, animeId]
    )
  }

  const showToast = (message: string, type: ToastType = 'info') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar 
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        onAuthClick={() => setAuthModalOpen(true)}
        onShowToast={showToast}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
      <main className="flex-1 pt-[70px]">
        <Hero onStartClick={() => setAuthModalOpen(true)} />
        <AnimeFeed 
          searchQuery={searchQuery}
          likedAnime={likedAnime}
          onToggleLike={handleToggleLike}
          onShowToast={showToast}
        />
        <Newsletter onShowToast={showToast} />
      </main>

      <Footer onContactClick={() => setContactModalOpen(true)} />

      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onShowToast={showToast}
        onLogin={handleLogin}
      />

      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onShowToast={showToast}
      />

      {toast && (
        <Toast 
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

export default App
