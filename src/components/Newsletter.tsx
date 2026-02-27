import { useState } from 'react'
import { Mail } from 'lucide-react'

interface NewsletterProps {
  onShowToast: (message: string, type: 'success' | 'error' | 'info') => void
}

export default function Newsletter({ onShowToast }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      onShowToast('Please enter a valid email', 'error')
      return
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      onShowToast('Please enter a valid email address', 'error')
      return
    }

    // Store in localStorage
    const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]')
    
    // Check if already subscribed
    if (subscriptions.includes(email)) {
      onShowToast('This email is already subscribed!', 'info')
      return
    }

    subscriptions.push(email)
    localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions))

    setSubmitted(true)
    onShowToast('Thank you for subscribing to our newsletter!', 'success')
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Stay Updated on New Releases
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Subscribe to our newsletter to receive the latest anime news, recommendations, and exclusive updates directly in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Mail size={20} />
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="text-success font-medium animate-pulse">
            ✓ Successfully subscribed! Check your email for confirmation.
          </p>
        )}
      </div>
    </section>
  )
}
