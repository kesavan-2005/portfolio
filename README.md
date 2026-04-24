# Kesavan R - Professional Portfolio

This is a modern, responsive, completely built Single Page Application (SPA) portfolio created for Kesavan R. It features a sleek dark/light mode toggle, high-performance scroll animations, and optimized SEO metadata.

## Tech Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter (Google Fonts)

## Features Included
- Complete Dark/Light Mode.
- Smooth scrolling and active-section highlighting.
- Fully responsive across all devices.
- Placeholder for CV download (replace `/public/Kesavan_R_Resume.pdf` with your actual PDF).
- Social links routing to GitHub and LinkedIn.

---

## Local Development Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Dev Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🚀 1-Click Netlify Deployment

This project is fully ready for deployment on Netlify or Vercel out-of-the-box, as it's a standard Vite React app.

### Deploying to Netlify (Fastest Method)
1. Commit this entire folder to a new GitHub repository called `portfolio`.
2. Go to [Netlify](https://app.netlify.com/) and sign in with GitHub.
3. Click **Add new site** > **Import an existing project**.
4. Select your `portfolio` GitHub repository.
5. Netlify will autodetect the Vite settings. Ensure the following:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**.
7. *Optional*: Go to Domain Settings in Netlify to set a custom domain name.

### Updating your Resume CV
Currently, the "Download CV" button downloads a placeholder file.
Before publishing or sharing the URL, place your real Resume PDF file into the `public/` folder and name it **EXACTLY** `Kesavan_R_Resume.pdf`. It will automatically be hosted and downloadable by visitors.
