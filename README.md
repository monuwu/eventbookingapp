# EventHub - Event Booking Web Application

<div align="center">
  <h3>🎉 Modern Event Discovery & Booking Platform</h3>
  <p>A beautiful, responsive React.js web application for browsing and booking events</p>
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Usage Guide](#usage-guide)
- [Screenshots](#screenshots)
- [Design Highlights](#design-highlights)

---

## 🌟 Overview

**EventHub** is a production-ready event booking web application built with React.js and Tailwind CSS. It provides a seamless user experience for discovering, viewing, and booking events across various categories including Music, Technology, Sports, Art, Food, and more.

### Key Highlights

✨ **Modern UI/UX** - Clean, professional design with smooth animations  
🎨 **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
🛒 **Smart Cart System** - Context API-based state management with localStorage persistence  
🔍 **Advanced Filtering** - Search, sort, and filter events by multiple criteria  
📱 **Mobile-First** - Optimized for all screen sizes  
⚡ **Performance** - Fast loading with optimized images and code  

---

## ✨ Features

### Core Functionality

#### 1. **Event List Page**
- Grid-based card layout with event cards
- Real-time search functionality
- Category filtering (Music, Tech, Sports, etc.)
- Multiple sorting options:
  - By Date
  - By Price (Low to High / High to Low)
  - By Name (Alphabetical)
- Displays 12 diverse events with realistic data
- Hover effects and smooth transitions

#### 2. **Event Details Page**
- Full-screen banner image
- Comprehensive event information:
  - Date, time, and location
  - Venue details
  - Event capacity
  - Organizer information
  - Tags and categories
- Sticky booking card with:
  - Price display
  - "Add to Cart" functionality
  - Feature highlights (instant confirmation, e-ticket, etc.)
- Responsive layout with sidebar

#### 3. **Booking Cart Page**
- List of selected events with images
- Event details summary
- Remove item functionality
- Real-time total calculation
- Order summary sidebar
- Empty cart state with CTA
- Checkout simulation

### Additional Features

- **Notification System**: Toast notifications for user actions
- **Persistent Cart**: LocalStorage integration
- **Navigation**: Smooth routing with React Router
- **Duplicate Prevention**: Can't add same event twice
- **Professional Footer**: Social links and site information

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.2** - Modern React with Hooks
- **React Router DOM 6.20** - Client-side routing

### Styling
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Custom animations** - Fade-in, slide-up, scale-in effects
- **Gradient design system** - Primary and accent color schemes

### State Management
- **Context API** - Global state for cart management
- **LocalStorage** - Cart persistence across sessions

### Development Tools
- **React Scripts 5.0** - Build tooling
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 📁 Project Structure

```
eventbookingapp/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # Reusable components
│   │   ├── Navbar.js          # Navigation bar with cart badge
│   │   ├── Footer.js          # Site footer
│   │   ├── EventCard.js       # Event card component
│   │   └── Notification.js    # Toast notification system
│   ├── pages/                  # Page components
│   │   ├── EventList.js       # Main events listing page
│   │   ├── EventDetails.js    # Individual event details
│   │   └── BookingCart.js     # Shopping cart page
│   ├── context/                # State management
│   │   └── BookingContext.js  # Cart & booking context
│   ├── data/                   # Mock data
│   │   └── events.js          # Event dataset (12 events)
│   ├── App.js                  # Main app component with routing
│   ├── index.js                # React entry point
│   └── index.css               # Global styles & Tailwind imports
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

### Installation

1. **Clone or Navigate to the Project**
   ```bash
   cd c:\Users\monic\eventbookingapp
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open in Browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to that URL

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The build folder will contain production-ready files.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode at `http://localhost:3000` |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App (one-way operation) |

---

## 📖 Usage Guide

### Browsing Events

1. **Homepage**: View all available events in a beautiful card grid
2. **Search**: Use the search bar to find events by title, description, or location
3. **Filter**: Select a category from the dropdown to filter events
4. **Sort**: Choose sorting option (by date, price, or name)
5. **Clear Filters**: Remove active filters with one click

### Viewing Event Details

1. Click on any event card or "View Details" button
2. See comprehensive event information
3. View the sticky booking card on the right (desktop) or below (mobile)
4. Click "Add to Cart" to book the event

### Managing Your Cart

1. Click the **Cart** icon in the navigation bar
2. Badge shows the number of items in cart
3. Review selected events with full details
4. Remove unwanted events using the "Remove" button
5. View order summary with total price
6. Click "Proceed to Checkout" to complete booking

### Responsive Experience

- **Desktop (1024px+)**: Full grid layout with sidebar
- **Tablet (768px-1023px)**: 2-column grid, adjusted spacing
- **Mobile (<768px)**: Single column, optimized for touch

---

## 📸 Screenshots

> **Note**: To add screenshots to this README:
> 1. Run the application (`npm start`)
> 2. Take screenshots of:
>    - Event List Page (homepage)
>    - Event Details Page
>    - Booking Cart Page (with items)
>    - Empty Cart State
>    - Mobile responsive views
> 3. Save them in a `screenshots/` folder
> 4. Update this section with image references

### Event List Page
```
[Screenshot will show: Event cards in grid, filters, search bar, category badges]
```

### Event Details Page
```
[Screenshot will show: Large banner image, event info, booking sidebar]
```

### Booking Cart Page
```
[Screenshot will show: Cart items list, order summary, checkout button]
```

---

## 🎨 Design Highlights

### Color Palette

- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Accent**: Purple/Pink gradient (#d946ef to #c026d3)
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)

### Typography

- **Headings**: Bold, large, high contrast
- **Body**: Regular weight, comfortable reading size
- **Buttons**: Semibold, clear call-to-action

### Animations

- **Fade-in**: Smooth entry for page content
- **Slide-up**: Elements slide up from bottom
- **Scale-in**: Cards and modals scale in
- **Hover effects**: Transform and shadow changes
- **Transitions**: 300ms duration for smooth interactions

### Component Design

- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Gradient backgrounds, scale on hover
- **Forms**: Focus states, ring effects
- **Navigation**: Sticky header, smooth scrolling
- **Footer**: Dark theme, social icons

---

## 🌐 Event Categories

The application features events across 8 categories:

1. **Music** - Concerts, festivals, live performances
2. **Technology** - Conferences, summits, workshops
3. **Sports** - Games, marathons, championships
4. **Art** - Exhibitions, gallery shows
5. **Food** - Food festivals, wine tastings
6. **Entertainment** - Comedy shows, theater
7. **Business** - Networking, pitch competitions
8. **Wellness** - Yoga retreats, wellness events

---

## 🔧 Customization

### Adding New Events

Edit `src/data/events.js` and add new event objects:

```javascript
{
  id: 13,
  title: "Your Event Title",
  category: "Category",
  description: "Event description...",
  date: "2025-MM-DD",
  time: "HH:MM",
  location: "Full location",
  venue: "Venue name",
  city: "City",
  price: 99.99,
  image: "https://image-url.com",
  capacity: 1000,
  organizer: "Organizer Name",
  tags: ["Tag1", "Tag2"]
}
```

### Modifying Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Changing Animations

Modify animation settings in `tailwind.config.js` under `extend.animation`.

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

This is a demo project for a React.js Intern Assignment. Feel free to:

- Report bugs
- Suggest features
- Submit pull requests
- Use as learning material

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author

Built with ❤️ as a React.js Intern Assignment demonstration project.

### Technologies Demonstrated

✅ React functional components & hooks  
✅ Context API for state management  
✅ React Router for navigation  
✅ Tailwind CSS for styling  
✅ Responsive design principles  
✅ Modern UI/UX patterns  
✅ Clean code architecture  
✅ Component reusability  

---

## 🎯 Learning Outcomes

This project demonstrates:

1. **React Fundamentals**: Components, Props, State, Hooks
2. **State Management**: Context API, localStorage integration
3. **Routing**: React Router DOM, dynamic routes
4. **Styling**: Tailwind CSS, custom animations
5. **UX Design**: Loading states, notifications, empty states
6. **Code Organization**: Folder structure, component separation
7. **Best Practices**: Clean code, reusable components, performance

---

## 📞 Support

For questions or issues:
- Check the code comments for implementation details
- Review this README for usage instructions
- Examine the component structure for understanding

---

<div align="center">
  <p>⭐ If you found this project helpful, please consider giving it a star!</p>
  <p>Made with React ⚛️ & Tailwind CSS 🎨</p>
</div>
