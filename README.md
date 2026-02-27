# AnimeExplorer - Professional React.js Application

A modern, fully-featured anime discovery and streaming platform built with React, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎨 Modern Design
- **Professional UI/UX**: Built with Tailwind CSS for a sleek, modern aesthetic
- **Dark Mode Support**: Automatic dark mode detection with user preference persistence
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle transitions and hover effects for enhanced user experience

### 🌟 Core Features
- **Anime Discovery**: Browse and search thousands of anime titles
- **Smart Filtering**: Filter by genre, season, and multiple criteria
- **User Authentication**: Login and signup with form validation
- **Favorites System**: Like and add anime to your watchlist
- **Comments Section**: Engage with other anime fans
- **Newsletter Signup**: Subscribe to latest anime news and recommendations
- **Theme Toggle**: Switch between light and dark modes

### 🏗️ Technical Highlights

**Frontend Stack:**
- **React 18**: Latest React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Lightning-fast build tool and dev server
- **Lucide React Icons**: Beautiful, customizable SVG icons

**Architecture:**
- Component-based architecture for reusability
- Custom hooks for state management
- Modular component organization
- Professional folder structure
- Clean, maintainable code

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar with search and theme toggle
│   ├── Hero.tsx            # Hero section with call-to-action
│   ├── AnimeFeed.tsx       # Main anime feed with filtering and tabs
│   ├── AnimeCard.tsx       # Individual anime card component
│   ├── Newsletter.tsx      # Newsletter subscription section
│   ├── Footer.tsx          # Footer with links
│   ├── Toast.tsx           # Toast notification component
│   └── modals/
│       ├── AuthModal.tsx   # Login/Signup modal
│       └── ContactModal.tsx # Contact form modal
├── App.tsx                 # Main application component
├── main.tsx               # Entry point
└── index.css              # Global styles with Tailwind

```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- Git (optional)

### Steps

1. **Navigate to the project directory:**
```bash
cd Anime-Web
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5173
```

## 🛠️ Available Commands

```bash
# Development server with hot module replacement
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF5E7D',
  secondary: '#7860FF',
  accent: '#FFCC4A',
  // ... more colors
}
```

### Fonts
Already includes Poppins and Roboto Condensed from Google Fonts. Modify in `tailwind.config.js` if needed.

### Content
Replace anime data in `AnimeFeed.tsx` with your own data source or API.

## 🔄 Component Documentation

### Navbar
- Mobile-responsive navigation
- Search functionality
- Theme toggle
- Authentication button
- Mobile menu with full navigation

### Hero Section
- Full-width hero with background image
- Clear call-to-action button
- Gradient text effects

### AnimeFeed
- Tab-based content switching (Trending, Latest, Watchlist)
- Advanced filtering system
- Responsive grid layout
- Anime card display

### AnimeCard
- Image thumbnail with hover effects
- Genre badge
- Studio information with avatar
- Like/Comment/Share buttons
- External link to anime page

### Modals
- **AuthModal**: Professional login/signup with validation
- **ContactModal**: Contact form for user inquiries

## 🌐 API Integration

The application currently uses mock data. To integrate with a real API:

1. Replace the `ANIME_DATA` in `AnimeFeed.tsx` with API calls
2. Use `fetch` or `axios` for API requests
3. Implement error handling and loading states
4. Add pagination for large datasets

Example:
```typescript
const [anime, setAnime] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
  setLoading(true)
  fetch('/api/anime')
    .then(res => res.json())
    .then(data => setAnime(data))
    .finally(() => setLoading(false))
}, [])
```

## 🔐 Authentication

Currently implements UI for authentication. For real authentication:

1. Set up backend API endpoint
2. Implement JWT token storage
3. Add protected routes with React Router
4. Store auth state in Context or global state management

## 📱 Responsive Breakpoints

Uses Tailwind's responsive prefixes:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on buttons and inputs
- Color contrast compliance

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub and connect to Vercel
```

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `dist/` folder
3. Configure environment variables as needed

## 📄 License

This project is open source and available for educational and commercial use.

## 💡 Future Enhancements

- [ ] Real API integration with anime database (MyAnimeList, AniList)
- [ ] User profiles and watchlist persistence
- [ ] Advanced search with autocomplete
- [ ] Social features (followers, recommendations)
- [ ] Video player integration
- [ ] Push notifications for new releases
- [ ] Rating system
- [ ] Review/discussion section
- [ ] Admin dashboard
- [ ] Multi-language support

## 🤝 Support

For issues or questions, please check the documentation or open an issue in the repository.

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS**
