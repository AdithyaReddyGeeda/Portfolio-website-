# Adithya Reddy Geeda — Portfolio

A React portfolio based on [adityasri.in](https://adityasri.in), customized with your details.

## Run Locally

```bash
cd "/Users/adithyareddy/Documents/documents/Portfolio"
npm install
npm start
```

## Build & Deploy

```bash
npm run build
```

Deploy the `build` folder to:
- **GitHub Pages**: Push to a repo and enable GitHub Pages, or use `npm run deploy` (update `homepage` in package.json first)
- **Netlify / Vercel**: Drag the `build` folder or connect your repo

## Customize

- **Profile photo**: Replace `src/Assets/aditya-kumar-pic.jpeg` with your photo (keep the same filename, or update the import in `src/data/profile.js`)
- **Resume link**: Add a Resume button in `src/components/Header.js` with your Google Drive or PDF link
- **Data**: Edit files in `src/data/` (profile.js, education.js, experience.js, projects.js, skills.js)
