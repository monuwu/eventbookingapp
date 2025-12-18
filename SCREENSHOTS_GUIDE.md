# 📸 Screenshot Guide for EventHub

## Purpose
This guide helps you capture professional screenshots for README documentation and portfolio presentation.

---

## 🖥️ Required Screenshots

### 1. Event List Page (Homepage)

#### Desktop View - Full Page
**What to capture:**
- Full page from top to bottom
- Shows navbar with logo and cart
- Hero section with title
- Filter section (search, category, sort)
- Events grid with multiple cards visible
- Footer section

**Steps:**
1. Navigate to `http://localhost:3000`
2. Ensure 12 events are visible
3. Take full-page screenshot
4. Save as: `screenshots/01-homepage-desktop.png`

#### Desktop View - With Active Filters
**What to capture:**
- Search term entered (e.g., "music")
- Category filter selected (e.g., "Music")
- Filter chips showing active filters
- Filtered results

**Steps:**
1. Type "music" in search
2. Select "Music" from category dropdown
3. Take screenshot
4. Save as: `screenshots/02-homepage-filtered.png`

#### Desktop View - Event Cards Close-up
**What to capture:**
- 3-6 event cards clearly visible
- Show hover state on one card (if possible)
- Category badges and prices visible

**Steps:**
1. Scroll to events grid
2. Hover over one card
3. Take screenshot of card grid
4. Save as: `screenshots/03-event-cards.png`

---

### 2. Event Details Page

#### Desktop View - Full Page
**What to capture:**
- Hero banner with event image
- Back button visible
- Event title and category
- Full content area showing description
- Info grid (date, location, capacity, organizer)
- Booking sidebar with price and button
- Tags section

**Steps:**
1. Click any event card
2. Wait for page to load
3. Take full-page screenshot
4. Save as: `screenshots/04-event-details-full.png`

#### Desktop View - Booking Sidebar Close-up
**What to capture:**
- Price display
- "Add to Cart" button
- Feature list with checkmarks
- Security icons

**Steps:**
1. Scroll to show sidebar clearly
2. Take screenshot of sidebar
3. Save as: `screenshots/05-booking-sidebar.png`

#### After Adding to Cart
**What to capture:**
- Success notification appearing
- Updated cart badge in navbar

**Steps:**
1. Click "Add to Cart" button
2. Immediately take screenshot while notification shows
3. Save as: `screenshots/06-add-to-cart-notification.png`

---

### 3. Booking Cart Page

#### Desktop View - Cart with Items
**What to capture:**
- Page title "Your Booking Cart"
- Multiple cart items (add 2-3 events first)
- Cart item cards with images and details
- Order summary sidebar
- Total amount
- Checkout button

**Steps:**
1. Add 2-3 events to cart
2. Navigate to cart page
3. Take full-page screenshot
4. Save as: `screenshots/07-cart-with-items.png`

#### Desktop View - Empty Cart State
**What to capture:**
- Empty cart icon
- "Your Cart is Empty" message
- "Browse Events" CTA button

**Steps:**
1. Clear cart (remove all items)
2. View cart page
3. Take screenshot
4. Save as: `screenshots/08-empty-cart.png`

---

### 4. Mobile Responsive Views

#### Mobile - Homepage
**What to capture:**
- Mobile navbar (stacked/hamburger if implemented)
- Hero section
- Filters (mobile layout)
- Single column event cards

**Steps:**
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select iPhone 12 Pro or similar
4. Navigate to homepage
5. Take screenshot
6. Save as: `screenshots/09-mobile-homepage.png`

#### Mobile - Event Details
**What to capture:**
- Hero banner (mobile)
- Content stacked vertically
- Booking card below content (not sidebar)

**Steps:**
1. In mobile view, click event
2. Take full-page screenshot
3. Save as: `screenshots/10-mobile-event-details.png`

#### Mobile - Cart
**What to capture:**
- Cart items in single column
- Summary card stacked below

**Steps:**
1. In mobile view, go to cart
2. Ensure items in cart
3. Take screenshot
4. Save as: `screenshots/11-mobile-cart.png`

---

### 5. Tablet View (Optional)

#### Tablet - Homepage
**Dimensions:** 768px x 1024px (iPad)

**Steps:**
1. Set viewport to tablet size
2. Navigate to homepage
3. Take screenshot
4. Save as: `screenshots/12-tablet-homepage.png`

---

### 6. Interactive States

#### Hover Effects
**What to capture:**
- Event card with hover effect (shadow, scale)
- Button hover state

**Steps:**
1. Hover over event card
2. Use screenshot tool that captures hover state
3. Save as: `screenshots/13-hover-effects.png`

#### Filter Chips
**What to capture:**
- Active filter chips with X button
- Multiple filters active

**Steps:**
1. Apply search and category filter
2. Capture filter chip area
3. Save as: `screenshots/14-filter-chips.png`

---

## 📱 Screenshot Settings

### Recommended Tools

**Windows:**
- Snipping Tool (Windows + Shift + S)
- Full page: Use browser extension like "GoFullPage"

**Browser:**
- Firefox: Built-in full-page screenshot
- Chrome: DevTools → Three dots → Capture screenshot

### Image Specifications

| Setting | Value |
|---------|-------|
| Format | PNG |
| Quality | High |
| DPI | 72 (web) |
| Max Width | 1920px (desktop) |
| Max Width | 375px (mobile) |

---

## 📁 Folder Structure

Create a `screenshots` folder in project root:

```
eventbookingapp/
├── screenshots/
│   ├── 01-homepage-desktop.png
│   ├── 02-homepage-filtered.png
│   ├── 03-event-cards.png
│   ├── 04-event-details-full.png
│   ├── 05-booking-sidebar.png
│   ├── 06-add-to-cart-notification.png
│   ├── 07-cart-with-items.png
│   ├── 08-empty-cart.png
│   ├── 09-mobile-homepage.png
│   ├── 10-mobile-event-details.png
│   ├── 11-mobile-cart.png
│   ├── 12-tablet-homepage.png (optional)
│   ├── 13-hover-effects.png (optional)
│   └── 14-filter-chips.png (optional)
└── ...
```

---

## 🎨 Screenshot Editing (Optional)

### Recommended Edits
1. **Arrows/Annotations**: Point to key features
2. **Highlights**: Circle important UI elements
3. **Captions**: Add text explaining features
4. **Borders**: Add subtle borders for clarity

### Tools
- **Windows**: Paint, Paint 3D
- **Online**: Canva, Figma
- **Mac**: Preview, Sketch

---

## 📄 Adding to README

After capturing screenshots, update `README.md`:

```markdown
## 📸 Screenshots

### Event List Page
![Homepage Desktop](screenshots/01-homepage-desktop.png)
*Browse through all available events with filters and search*

### Event Details
![Event Details](screenshots/04-event-details-full.png)
*Detailed event view with booking functionality*

### Booking Cart
![Cart with Items](screenshots/07-cart-with-items.png)
*Review selected events before checkout*

### Mobile Responsive
<div style="display: flex; gap: 10px;">
  <img src="screenshots/09-mobile-homepage.png" width="250" alt="Mobile Homepage">
  <img src="screenshots/10-mobile-event-details.png" width="250" alt="Mobile Details">
</div>
```

---

## ✅ Screenshot Checklist

Before finalizing:

- [ ] All screenshots captured in high quality
- [ ] Desktop views at 1920px or 1440px width
- [ ] Mobile views at 375px width (iPhone size)
- [ ] Images saved as PNG format
- [ ] File names are descriptive and numbered
- [ ] All important features visible in screenshots
- [ ] No personal information visible
- [ ] Screenshots show realistic data (not test/dummy)
- [ ] Color scheme clearly visible
- [ ] Animations/transitions captured (if possible)
- [ ] Empty states documented
- [ ] Error/notification states shown

---

## 🎯 Priority Screenshots

If time is limited, capture these ESSENTIAL screenshots:

1. ✅ **01-homepage-desktop.png** (Most important)
2. ✅ **04-event-details-full.png**
3. ✅ **07-cart-with-items.png**
4. ✅ **09-mobile-homepage.png**

These 4 screenshots cover all main features and responsive design.

---

## 💡 Tips for Great Screenshots

1. **Clean Browser**: Close unnecessary tabs, hide bookmarks bar
2. **Full Data**: Ensure all events are loaded
3. **Good Timing**: Capture notifications immediately
4. **Consistent Size**: Use same window size for all desktop shots
5. **Good Content**: Use events with good images
6. **Zoom Level**: 100% (not zoomed in/out)
7. **No Scrollbars**: Hide if possible for cleaner look

---

## 🚀 Quick Screenshot Session

**Complete session in 10 minutes:**

1. Start app: `npm start` (2 min wait)
2. Homepage screenshot (1 min)
3. Apply filters, screenshot (1 min)
4. Open event details, screenshot (1 min)
5. Add to cart, screenshot notification (1 min)
6. Cart page with items, screenshot (1 min)
7. Mobile view setup, 3 screenshots (3 min)

Total: ~10 minutes

---

## 📤 Sharing Screenshots

### For README
- Host on GitHub (commit to repo)
- Use relative paths: `![Alt](screenshots/file.png)`

### For Portfolio
- Upload to image hosting (Imgur, Cloudinary)
- Create image gallery
- Add to portfolio website

### For Presentation
- Create PowerPoint/Google Slides
- Add captions explaining features
- Show before/after comparisons

---

**Ready to capture?** Start your app and follow this guide! 📸

Remember: Good screenshots make your project stand out! ✨
