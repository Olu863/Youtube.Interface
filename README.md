# YouTube React Interface

A YouTube-like interface built with React + Vite. Converted from your original HTML/CSS design.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx       # Left navigation menu
│   ├── Navbar.jsx        # Top navigation bar with search
│   ├── Tags.jsx          # Category tags
│   ├── VideoCard.jsx     # Individual video card
│   └── VideoGrid.jsx     # Video grid container
├── App.jsx               # Main application component
├── main.jsx              # Entry point
└── index.css             # Global styles

public/
└── (add your images here)
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The app will open at `http://localhost:5173`

### 3. Build for Production
```bash
npm build
```

## Features

- ✅ Responsive sidebar navigation
- ✅ Search functionality (ready for integration)
- ✅ Interactive category tags
- ✅ Video grid with hover effects
- ✅ YouTube-like dark theme
- ✅ Mobile responsive design

## Customization

### Add Your Images
Replace placeholder URLs in `src/components/VideoGrid.jsx` with your actual image paths:
```javascript
thumbnail: 'your-image-path.jpg',
profilePic: 'channel-profile.jpg'
```

### Modify Videos
Edit the `videos` array in `VideoGrid.jsx` to add your own video data.

### Update Styles
All styles are in `src/index.css`. The layout mirrors your original CSS but with React-friendly classes.

## Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling
