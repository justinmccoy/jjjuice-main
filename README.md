# JJJUICE - React Application

Authentische mexikanische Salsa – mit Tradition, Liebe und der perfekten Schärfe.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📦 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - React conversion"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jjjuice-main.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure the build settings
6. Click "Deploy"

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties

## 📁 Project Structure

```
jjjuice-main/
├── public/
│   └── logo.png          # Logo image (add your logo here)
├── src/
│   ├── components/
│   │   ├── Hero.jsx      # Hero section component
│   │   ├── ComingSoon.jsx # Coming soon section with countdown
│   │   └── Footer.jsx    # Footer component
│   ├── App.css           # Global styles
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── vercel.json           # Vercel deployment config
```

## 📝 Notes

- Make sure to add your `logo.png` file to the `public` directory
- The countdown timer is set to 42 days from the current date
- Email signup form shows an alert (implement backend integration as needed)

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
    --melon-mambo: #E84A81;
    --fresh-fig: #9E4F6E;
    --mango-melody: #F5A847;
    --lemon-lime: #D4D94E;
    --garden-green: #5A7F5E;
    --cream: #FDF5E6;
    --black: #0A0A0A;
    --white: #FFFFFF;
}
```

### Content
Edit text content in the component files:
- `src/components/Hero.jsx` - Hero section text
- `src/components/ComingSoon.jsx` - Features and countdown
- `src/components/Footer.jsx` - Footer content

## 📄 License

© 2026 JJJUICE SALSA CO. ALLE RECHTE VORBEHALTEN