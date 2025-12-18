# Quick Setup Guide for EventHub

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation Steps

### 1. Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install
```

This will install all required packages:
- React 18.2
- React Router DOM 6.20
- React Scripts 5.0
- Tailwind CSS 3.3
- PostCSS & Autoprefixer

### 2. Start the Development Server
```bash
npm start
```

The application will:
- Open automatically in your browser at http://localhost:3000
- Enable hot-reload (changes reflect instantly)
- Show compilation errors in the console

### 3. Verify Everything Works

You should see:
✅ A homepage with 12 event cards  
✅ A navigation bar with EventHub logo and Cart  
✅ Filters (search, category, sort)  
✅ Smooth animations and hover effects  

### 4. Test the Features

**Browse Events:**
- Use the search bar to find events
- Filter by category dropdown
- Sort by date, price, or name

**View Event Details:**
- Click any event card
- See full details and banner image
- Click "Add to Cart" button

**Manage Cart:**
- Click Cart icon in navbar
- View selected events
- Remove items
- Click "Proceed to Checkout"

## Common Issues & Solutions

### Issue: `npm install` fails
**Solution:** 
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

### Issue: Port 3000 is already in use
**Solution:**
- Close other applications using port 3000
- Or use: `PORT=3001 npm start` to use a different port

### Issue: Tailwind styles not loading
**Solution:**
- Ensure all files are saved
- Restart the development server (Ctrl+C, then `npm start`)

## Building for Production

To create a production build:
```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## Project Structure

```
eventbookingapp/
├── src/
│   ├── components/     # Navbar, Footer, EventCard, Notification
│   ├── pages/          # EventList, EventDetails, BookingCart
│   ├── context/        # BookingContext (state management)
│   ├── data/           # events.js (mock data)
│   ├── App.js          # Main app with routing
│   └── index.js        # Entry point
├── public/             # Static files
└── package.json        # Dependencies
```

## Need Help?

Refer to the main README.md for:
- Detailed feature documentation
- Customization guide
- Design specifications
- Complete usage instructions

---

**Ready to Start?** Run `npm install` then `npm start` 🚀
