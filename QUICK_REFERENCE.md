# 🚀 Quick Reference Guide - EventHub

## Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## File Quick Access

### Components
- **Navbar**: `src/components/Navbar.js` - Navigation with cart badge
- **Footer**: `src/components/Footer.js` - Site footer
- **EventCard**: `src/components/EventCard.js` - Reusable event card
- **Notification**: `src/components/Notification.js` - Toast notifications

### Pages
- **EventList**: `src/pages/EventList.js` - Main events page
- **EventDetails**: `src/pages/EventDetails.js` - Event detail view
- **BookingCart**: `src/pages/BookingCart.js` - Shopping cart

### Core Files
- **App**: `src/App.js` - Main app with routing
- **Context**: `src/context/BookingContext.js` - State management
- **Data**: `src/data/events.js` - Mock events (12 events)
- **Styles**: `src/index.css` - Global CSS + Tailwind

### Config
- **Tailwind**: `tailwind.config.js` - Theme and animations
- **Package**: `package.json` - Dependencies

---

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | EventList | Homepage with all events |
| `/event/:id` | EventDetails | Event detail page |
| `/cart` | BookingCart | Shopping cart |

---

## Context API Methods

```javascript
import { useBooking } from '../context/BookingContext';

const { 
  cart,              // Array of cart items
  addToCart,         // Add event to cart
  removeFromCart,    // Remove by bookingId
  clearCart,         // Empty cart
  getTotalPrice,     // Get total price
  getCartCount,      // Get item count
  notification,      // Current notification
  showNotification   // Show custom notification
} = useBooking();
```

### Usage Examples

```javascript
// Add to cart
const success = addToCart(event);

// Remove from cart
removeFromCart(bookingId);

// Get total
const total = getTotalPrice(); // Returns number

// Get count
const count = getCartCount(); // Returns number

// Show notification
showNotification('Custom message', 'success'); // or 'error', 'warning', 'info'
```

---

## Event Object Structure

```javascript
{
  id: 1,                          // Unique ID
  title: "Event Title",           // String
  category: "Music",              // Category string
  description: "Full desc...",    // Detailed description
  date: "2025-07-15",            // YYYY-MM-DD
  time: "18:00",                 // HH:MM
  location: "Full address",       // String
  venue: "Venue name",            // String
  city: "City name",              // String
  price: 89.99,                   // Number
  image: "https://...",           // Image URL
  capacity: 5000,                 // Number
  organizer: "Organizer name",    // String
  tags: ["Tag1", "Tag2"]         // Array of strings
}
```

---

## Tailwind Custom Classes

### Buttons
```html
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
```

### Cards
```html
<div className="card">Card content</div>
```

### Input Fields
```html
<input className="input-field" />
```

---

## Animations

### Available Animations
- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up from bottom
- `animate-scale-in` - Scale in effect

### Usage
```html
<div className="animate-fade-in">Content</div>
<div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
  Delayed content
</div>
```

---

## Color Classes

### Primary (Blue)
- `bg-primary-50` to `bg-primary-900`
- `text-primary-50` to `text-primary-900`

### Accent (Purple/Pink)
- `bg-accent-50` to `bg-accent-900`
- `text-accent-50` to `text-accent-900`

### Gradients
```html
<div className="bg-gradient-to-r from-primary-600 to-accent-600">
  Gradient background
</div>
```

---

## Common Patterns

### Format Date
```javascript
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
```

### Category Color Mapping
```javascript
const getCategoryColor = (category) => {
  const colors = {
    Music: 'bg-purple-100 text-purple-700',
    Technology: 'bg-blue-100 text-blue-700',
    Sports: 'bg-green-100 text-green-700',
    Art: 'bg-pink-100 text-pink-700',
    Food: 'bg-orange-100 text-orange-700',
    Entertainment: 'bg-yellow-100 text-yellow-700',
    Business: 'bg-indigo-100 text-indigo-700',
    Wellness: 'bg-teal-100 text-teal-700'
  };
  return colors[category] || 'bg-gray-100 text-gray-700';
};
```

### Navigate Programmatically
```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/cart'); // Navigate to cart
navigate(-1);      // Go back
```

### Filter & Sort Events
```javascript
import { useMemo } from 'react';

const filtered = useMemo(() => {
  let result = events;
  
  // Filter by search
  if (searchTerm) {
    result = result.filter(e => 
      e.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Sort
  result.sort((a, b) => {
    if (sortBy === 'date') return new Date(a.date) - new Date(b.date);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });
  
  return result;
}, [searchTerm, sortBy]);
```

---

## Responsive Design

### Breakpoints
```javascript
// Mobile: < 768px
// Tablet: 768px - 1023px
// Desktop: ≥ 1024px
```

### Grid Classes
```html
<!-- Responsive grid -->
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Items -->
</div>
```

---

## Icons (SVG)

### Calendar Icon
```html
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
```

### Location Icon
```html
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
```

### Cart Icon
```html
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
```

---

## LocalStorage

The app automatically persists cart data:

```javascript
// Saved automatically on cart change
localStorage.setItem('eventCart', JSON.stringify(cart));

// Loaded automatically on app mount
const savedCart = localStorage.getItem('eventCart');
```

To clear manually:
```javascript
localStorage.removeItem('eventCart');
```

---

## Adding New Events

Edit `src/data/events.js`:

```javascript
export default [
  // ... existing events
  {
    id: 13, // Increment ID
    title: "New Event",
    category: "Music", // Must match existing categories
    description: "Description...",
    date: "2025-12-31",
    time: "20:00",
    location: "Venue, City",
    venue: "Venue Name",
    city: "City",
    price: 99.99,
    image: "https://images.unsplash.com/...",
    capacity: 1000,
    organizer: "Organizer",
    tags: ["Tag1", "Tag2"]
  }
];
```

---

## Customizing Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color scale
        600: '#yourcolor',
      },
    },
    animation: {
      // Add custom animations
    },
  },
}
```

---

## Testing Checklist

- [ ] Homepage loads with all 12 events
- [ ] Search filters events correctly
- [ ] Category filter works
- [ ] Sort options work
- [ ] Event card links to details
- [ ] Event details page shows all info
- [ ] Add to cart shows notification
- [ ] Cart badge updates
- [ ] Cart page shows items
- [ ] Remove from cart works
- [ ] Total calculates correctly
- [ ] Checkout shows confirmation
- [ ] Back navigation works
- [ ] Mobile responsive
- [ ] LocalStorage persists cart

---

## Troubleshooting

### Images not loading
- Check internet connection (using Unsplash CDN)
- Verify image URLs in `src/data/events.js`

### Tailwind classes not applying
- Ensure server is restarted after config changes
- Check `index.css` imports Tailwind directives
- Verify `tailwind.config.js` content paths

### Cart not persisting
- Check browser localStorage support
- Check console for errors
- Clear localStorage and try again

### Navigation not working
- Verify React Router is installed
- Check route paths in `App.js`
- Ensure `<Link>` components used for navigation

---

## Keyboard Shortcuts (Development)

- **Ctrl+C** - Stop dev server
- **Ctrl+Shift+R** - Hard reload browser
- **F12** - Open DevTools

---

## Browser DevTools

### React DevTools
Install React DevTools extension to:
- Inspect component tree
- View props and state
- Debug Context values

### Useful Console Commands
```javascript
// View cart
localStorage.getItem('eventCart')

// Clear cart
localStorage.removeItem('eventCart')

// Reload page
location.reload()
```

---

## Performance Tips

1. **Images**: Using CDN (Unsplash) for fast loading
2. **useMemo**: Filtering/sorting memoized
3. **LocalStorage**: Cart persists across sessions
4. **Code Splitting**: React Router handles route-based splitting
5. **Lazy Loading**: Images load as needed

---

## Common Modifications

### Change App Title
Edit `public/index.html`:
```html
<title>Your New Title</title>
```

### Change Colors
Edit `tailwind.config.js` colors

### Add More Filter Options
Edit `EventList.js` state and filter logic

### Modify Cart Logic
Edit `src/context/BookingContext.js`

---

## Project Stats

- **Components**: 4 reusable
- **Pages**: 3 main pages
- **Routes**: 3 routes
- **Events**: 12 in dataset
- **Categories**: 8 types
- **Lines of Code**: ~1500+
- **Dependencies**: React, Router, Tailwind

---

## Quick Links

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Unsplash](https://unsplash.com) (Image source)

---

**Happy Coding! 🚀**

For detailed documentation, see:
- `README.md` - Full documentation
- `SETUP.md` - Setup instructions
- `ARCHITECTURE.md` - System architecture
- `PROJECT_SUMMARY.md` - Project overview
