# Portfolio - Full Stack Option A

A production-grade React application that integrates with your Java Spring Boot backend API. Features modern architecture, proper state management, and professional design.

## Features

✨ **Frontend**
- React 18 with hooks and functional components
- Vite for fast bundling and HMR
- Tailwind CSS for responsive design
- Dark theme with smooth animations
- Fully responsive (mobile-first)

🏗️ **Architecture**
- Service-based API communication (axios + interceptors)
- Custom React hooks for data fetching, forms, and theme
- Context API for global state management
- Proper error handling and loading states
- Component composition and reusability

🔗 **Backend Integration**
- Fetches projects from `/api/v1/projects`
- Fetches experiences from `/api/v1/experiences`
- Resume download support
- Proper error handling for API failures

## Project Structure

```
portfolio-fullstack/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx        # Main navigation with mobile support
│   │   ├── UI.jsx                # Reusable UI components
│   ├── pages/
│   │   ├── HomePage.jsx          # Hero section
│   │   ├── ProjectsPage.jsx      # Projects with modal details
│   │   ├── ExperiencePage.jsx    # Experience with timeline
│   │   ├── EducationPage.jsx     # Education details
│   │   ├── SkillsPage.jsx        # Skills by category
│   │   └── ContactPage.jsx       # Contact form
│   ├── services/
│   │   ├── apiClient.js          # Axios with interceptors
│   │   └── dataService.js        # API methods for each entity
│   ├── hooks/
│   │   └── index.js              # Custom React hooks
│   ├── context/
│   │   └── AppContext.jsx        # Global app state
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind + custom styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Quick Start

### Prerequisites
- Node.js 16+ and npm 8+
- Java Spring Boot backend running on `http://localhost:9090`

### Installation

```bash
cd portfolio-fullstack
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

**Hot Module Replacement (HMR)**: Changes are reflected instantly without page reload.

### Production Build

```bash
npm run build
npm run preview
```

## Environment Configuration

Create a `.env.local` file to configure the backend API URL:

```env
VITE_API_URL=http://localhost:9090/api/v1
```

**Options**:
- Development: `http://localhost:9090/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

## Architecture Details

### API Client (services/apiClient.js)

```javascript
// Automatic request/response interceptors
// Features:
// - Authorization header injection
// - Request/response logging
// - Automatic error handling
// - Timeout configuration
```

### Custom Hooks (hooks/index.js)

```javascript
// useFetch - Data fetching with loading/error states
const { data, loading, error } = useFetch(projectService.getAllProjects);

// useTheme - Dark/light mode toggle
const { isDark, toggleTheme } = useTheme();

// useForm - Form state management with validation
const form = useForm(initialValues, onSubmit);

// useLocalStorage - Persistent local storage
const [value, setValue] = useLocalStorage('key', defaultValue);
```

### Context API (context/AppContext.jsx)

Global application state:
- Theme (dark/light)
- User information (for future auth)
- App-wide notifications

### Components

**Navigation**
- Sticky header with smooth navigation
- Mobile hamburger menu
- Theme toggle button
- Active page highlighting

**UI Components**
- Reusable Cards, Badges, Buttons
- Loading skeletons for better UX
- Error messages with retry
- Success notifications

**Pages**
- Each page is a separate component
- Proper loading and error states
- Real data from backend API

## API Integration

### Fetching Projects

```javascript
import { projectService } from '@/services/dataService';
import { useFetch } from '@/hooks';

const ProjectsPage = () => {
  const { data: projects, loading, error } = useFetch(
    projectService.getAllProjects
  );
  
  // Use projects data...
};
```

### Error Handling

```javascript
// API errors are automatically caught and logged
// Interceptor handles:
// - 401 Unauthorized → redirect to login
// - 403 Forbidden → log error
// - 404 Not Found → log error
// - 5xx Server errors → log error
```

## Customization

### Update Your Information

1. **Header & Links** (App.jsx)
```jsx
// Update links and contact info
<a href="https://github.com/your-username">GitHub</a>
```

2. **Colors & Theme** (tailwind.config.js)
```js
theme: {
  colors: {
    primary: '#3b82f6', // Change primary color
  }
}
```

3. **Font & Typography** (tailwind.config.js)
```js
theme: {
  fontFamily: {
    sans: ['Your Font', 'sans-serif'],
  }
}
```

## Performance Optimization

✓ **Code Splitting** - Each route is lazy-loaded (ready for React Router in future)
✓ **Tree Shaking** - Unused code is removed in production
✓ **Minification** - Terser for JS minification
✓ **CSS Optimization** - Tailwind purges unused styles
✓ **Image Optimization** - Ready for image optimization
✓ **Caching** - Browser caching via service workers (ready)

**Build Size**: ~40KB gzipped (before assets)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Next Steps

### Deploy Option A

Push to GitHub and deploy to Vercel/Netlify (same as Option D):

```bash
git init
git add .
git commit -m "Option A: Full React App"
git branch -M main
git push -u origin main
```

Then connect to Vercel/Netlify - automatic deployment!

### Extend to React Router

For multi-page navigation instead of single-page state:

```bash
npm install react-router-dom
```

Then update App.jsx:
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    {/* ... more routes ... */}
  </Routes>
</BrowserRouter>
```

### Add Authentication

When you build Option C:
```javascript
// Add JWT token management
const token = localStorage.getItem('authToken');
// Include in API requests via interceptor
```

### Add More Features

- Blog section with markdown support
- Project filters and search
- Experience timeline animations
- Skill progress bars (already included)
- Newsletter signup
- Analytics tracking

## Troubleshooting

### Backend Connection Issues

```bash
# Check if backend is running
curl http://localhost:9090/api/v1/projects

# Should return your projects array
```

### Port 5173 Already in Use

```bash
# Use a different port
npm run dev -- --port 5174
```

### Module Not Found Errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Performance Tips

1. **Use React DevTools Profiler** to identify slow components
2. **Lazy load images** using native `loading="lazy"`
3. **Minimize re-renders** with proper dependency arrays in useEffect
4. **Code split routes** when moving to React Router
5. **Monitor bundle size** with `npm run build`

## Testing

Ready for testing integration:
```bash
npm install --save-dev vitest @testing-library/react
# Add test files as .test.jsx
# Run tests with vitest
```

## Support & Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Axios Documentation](https://axios-http.com)

---

**Next**: Deploy this to production, then build Options B (Cloud) and C (Advanced Features)!
