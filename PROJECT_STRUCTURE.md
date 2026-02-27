# 📁 Project Structure Guide

## Complete Directory Tree

```
Anime-Web/
│
├── 📄 Configuration Files
│   ├── package.json                 # Dependencies and npm scripts
│   ├── package-lock.json            # Locked dependency versions
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tsconfig.node.json           # TypeScript Node configuration
│   ├── vite.config.ts               # Vite build configuration
│   ├── tailwind.config.js           # Tailwind CSS customization
│   ├── postcss.config.js            # PostCSS configuration
│   └── .gitignore                   # Git ignore rules
│
├── 📄 Documentation Files
│   ├── README.md                    # Main project README
│   ├── QUICK_START.md               # Quick start guide
│   ├── SETUP_GUIDE.md               # Detailed setup guide
│   └── COMPLETION_SUMMARY.md        # Project completion summary
│
├── 🚀 Executable Scripts
│   ├── start-dev.bat                # Start development server
│   ├── build.bat                    # Build for production
│   └── preview.bat                  # Preview production build
│
├── 📄 index.html                    # React app HTML template
│
├── 📁 src/                          # Source code directory
│   │
│   ├── 📄 main.tsx                  # React entry point
│   │
│   ├── 📄 App.tsx                   # Main application component
│   │   ├─ Controls theme toggle
│   │   ├─ Controls auth modal state
│   │   ├─ Controls contact modal state
│   │   ├─ Manages toast notifications
│   │   └─ Renders main layout
│   │
│   ├── 📄 index.css                 # Global styles
│   │   ├─ Tailwind imports
│   │   ├─ Custom scrollbar styles
│   │   └─ Global animations
│   │
│   └── 📁 components/               # React components
│       │
│       ├── 📄 Navbar.tsx            # Navigation bar
│       │   ├─ Logo with gradient
│       │   ├─ Search functionality
│       │   ├─ Theme toggle button
│       │   ├─ Login button
│       │   ├─ Mobile menu
│       │   └─ Responsive design
│       │
│       ├── 📄 Hero.tsx              # Hero section
│       │   ├─ Gradient background
│       │   ├─ Hero title
│       │   ├─ CTA button
│       │   └─ Background image
│       │
│       ├── 📄 AnimeFeed.tsx         # Main anime feed
│       │   ├─ Tab switching
│       │   ├─ Filtering system
│       │   ├─ Genre selection
│       │   ├─ Load more button
│       │   └─ Mock anime data
│       │
│       ├── 📄 AnimeCard.tsx         # Individual anime card
│       │   ├─ Image thumbnail
│       │   ├─ Genre badge
│       │   ├─ Studio info
│       │   ├─ Like button
│       │   ├─ Comment button
│       │   └─ External link
│       │
│       ├── 📄 Newsletter.tsx        # Newsletter section
│       │   ├─ Email input
│       │   ├─ Subscribe button
│       │   └─ Success message
│       │
│       ├── 📄 Footer.tsx            # Footer component
│       │   ├─ Branding
│       │   ├─ Navigation links
│       │   ├─ Contact button
│       │   └─ Year display
│       │
│       ├── 📄 Toast.tsx             # Toast notifications
│       │   ├─ Auto-dismiss
│       │   ├─ Multiple types
│       │   ├─ Icons
│       │   └─ Close button
│       │
│       └── 📁 modals/               # Modal components
│           │
│           ├── 📄 AuthModal.tsx     # Login/Signup modal
│           │   ├─ Login tab
│           │   ├─ Signup tab
│           │   ├─ Form validation
│           │   ├─ Password toggle
│           │   └─ Social buttons
│           │
│           └── 📄 ContactModal.tsx  # Contact form modal
│               ├─ Name input
│               ├─ Email input
│               ├─ Subject input
│               ├─ Message textarea
│               └─ Submit button
│
└── 📁 node_modules/                 # Dependencies (auto-generated)
    └── [138 packages]
```

---

## 🗂️ File Organization by Purpose

### 🎨 UI Components
```
src/components/
├── Navbar.tsx          # Navigation and search
├── Hero.tsx            # Banner and CTA
├── AnimeCard.tsx       # Card component
├── Newsletter.tsx      # Subscription form
└── Footer.tsx          # Footer section
```

### 🎯 Content Components
```
src/components/
├── AnimeFeed.tsx       # Main content area with filtering
└── Toast.tsx           # Notification system
```

### 🔐 Modal Components
```
src/components/modals/
├── AuthModal.tsx       # Authentication
└── ContactModal.tsx    # Contact form
```

### ⚙️ Configuration
```
Root directory/
├── vite.config.ts      # Build settings
├── tsconfig.json       # TypeScript settings
└── tailwind.config.js  # Theme and styling
```

### 📚 Documentation
```
Root directory/
├── README.md           # Project overview
├── QUICK_START.md      # Getting started
├── SETUP_GUIDE.md      # Detailed setup
└── COMPLETION_SUMMARY.md  # What was built
```

---

## 🔄 Component Hierarchy

```
App.tsx (Main)
│
├── Navbar.tsx
│   ├── Logo
│   ├── Navigation Links
│   ├── Search Bar
│   ├── Theme Toggle
│   ├── Login Button
│   └── Mobile Menu
│
├── Hero.tsx
│   ├── Title
│   └── CTA Button
│
├── AnimeFeed.tsx
│   ├── Tab Buttons
│   ├── Filter Section
│   │   └── Filter Menu
│   │       ├── Genre Checkboxes
│       └── Action Buttons
│   └── Story Grid
│       └── AnimeCard.tsx (Multiple)
│           ├── Image
│           ├── Genre Badge
│           ├── Studio Info
│           └── Action Buttons
│
├── Newsletter.tsx
│   ├── Title
│   └── Email Form
│
├── Footer.tsx
│   ├── Brand Info
│   └── Links
│
└── Modals
    ├── AuthModal.tsx
    │   ├── Login Form
    │   └── Signup Form
    ├── ContactModal.tsx
    │   └── Contact Form
    └── Toast.tsx
        ├── Success Toast
        ├── Error Toast
        └── Info Toast
```

---

## 📦 File Size Reference

| File | Size | Purpose |
|------|------|---------|
| App.tsx | ~70 lines | Main app state |
| Navbar.tsx | ~80 lines | Navigation |
| AnimeFeed.tsx | ~200 lines | Content area |
| AnimeCard.tsx | ~120 lines | Card component |
| AuthModal.tsx | ~330 lines | Authentication |
| ContactModal.tsx | ~90 lines | Contact form |
| Hero.tsx | ~40 lines | Hero section |
| Newsletter.tsx | ~50 lines | Newsletter |
| Footer.tsx | ~45 lines | Footer |
| Toast.tsx | ~40 lines | Notifications |

**Total**: ~1,200 lines of modular, maintainable code

---

## 🔗 Import/Dependency Map

```
main.tsx
└── App.tsx
    ├── Navbar.tsx
    │   └── lucide-react (icons)
    ├── Hero.tsx
    │   └── lucide-react
    ├── AnimeFeed.tsx
    │   ├── AnimeCard.tsx
    │   │   └── lucide-react
    │   └── lucide-react
    ├── Newsletter.tsx
    │   └── lucide-react
    ├── Footer.tsx
    │   └── lucide-react
    ├── AuthModal.tsx
    │   └── lucide-react
    ├── ContactModal.tsx
    │   └── lucide-react
    └── Toast.tsx
        └── lucide-react
```

---

## 📂 How Files are Used

### Entry Point
- **main.tsx** → Renders App.tsx into DOM

### Main Container
- **App.tsx** → Manages global state, renders all components

### Layout Components
- **Navbar.tsx** → Fixed header
- **Footer.tsx** → Document footer
- **Hero.tsx** → Hero banner

### Content
- **AnimeFeed.tsx** → Main content area
- **AnimeCard.tsx** → Content cards
- **Newsletter.tsx** → CTA section

### Interaction
- **AuthModal.tsx** → User authentication
- **ContactModal.tsx** → User feedback
- **Toast.tsx** → Notifications

### Styling
- **index.css** → Global styles
- **tailwind.config.js** → Theme config
- **tailwind.css** → Utility classes

---

## 🎯 Component Responsibility

| Component | Responsibility |
|-----------|-----------------|
| App | Global state, layout |
| Navbar | Navigation, search |
| Hero | Welcome banner, CTA |
| AnimeFeed | Content filtering, display |
| AnimeCard | Single item display |
| Newsletter | Email capture |
| Footer | Site info, links |
| AuthModal | User login/signup |
| ContactModal | User contact |
| Toast | Notifications |

---

## 🔄 Data Flow

```
App State
│
├── isDarkMode → Navbar, App, All components
├── authModalOpen → AuthModal visibility
├── contactModalOpen → ContactModal visibility
├── toast → Toast component
│
└── Component Props
    ├── Navbar receives: isDarkMode, onThemeToggle, onAuthClick
    ├── AnimeFeed receives: (none - self-contained)
    ├── Hero receives: onStartClick
    ├── Newsletter receives: onShowToast
    └── Modals receive: isOpen, onClose, onShowToast
```

---

## 📝 Key Directories Explained

### `src/components/`
All React components that render UI. Components are:
- **Functional** - Use React hooks
- **Reusable** - Accept props
- **Isolated** - Each handles own state
- **Composed** - Built from smaller pieces

### `src/components/modals/`
Specialized modal components:
- Full-screen overlays
- Form interactions
- User authentication
- User feedback

### `root/`
Configuration and documentation:
- Build configuration
- Type definitions
- Style setup
- Guides and READMEs

---

## 🚀 Build Output

When you run `npm run build`, it creates:

```
dist/
├── index.html          # Optimized HTML
├── *.js                # Minified JavaScript
├── *.css               # Minified CSS
└── assets/             # Images, fonts
```

This `dist/` folder is what you deploy to production.

---

## 💾 Storage & Configuration

### Local Storage
- **theme** - User's dark/light mode preference

### Session Data
- **React State** - Lives in memory during session

### Configuration
- **tailwind.config.js** - All design tokens
- **vite.config.ts** - Build settings
- **tsconfig.json** - TypeScript rules

---

## 🔐 Asset Organization

### Fonts
- From Google Fonts CDN
- Poppins (body text)
- Roboto Condensed (headings)

### Icons
- From Lucide React package
- 1000+ available icons
- Tree-shaken at build time

### Images
- External URLs (Unsplash, IMDb, etc.)
- Loaded with lazy loading
- Responsive with object-fit

---

## ✨ Architecture Benefits

### Modularity
- Each component is independent
- Easy to test and maintain
- Simple to reuse

### Scalability
- Easy to add new components
- Clear naming conventions
- Organized folder structure

### Maintainability
- TypeScript for safety
- Clear component boundaries
- Documented code

### Performance
- Code splitting ready
- Tree-shaking enabled
- HMR during development
- Optimized production build

---

## 🎓 Learning Path Using Structure

1. **Start with** `App.tsx` - Understand main structure
2. **Then study** `src/components/` - Learn components
3. **Check** modals for complex interactions
4. **Review** Hook usage in components
5. **Explore** Configuration files
6. **Read** Documentation for deployment

---

**This structure ensures scalability, maintainability, and easy collaboration!**
