// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Adithya Reddy Geeda - Data Scientist</title>
        <meta name="description" content="Adithya Reddy Geeda's portfolio. MS Engineering Data Science @ University of Houston. ML, NLP, Computer Vision projects and experience." />
        <meta name="keywords" content="Adithya Reddy Geeda, Data Scientist, ML Engineer, University of Houston, Portfolio" />
        <meta name="author" content="Adithya Reddy Geeda" />
        <meta property="og:title" content="Adithya Reddy Geeda - Portfolio" />
        <meta property="og:description" content="Data Scientist portfolio. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adithya Reddy Geeda - Portfolio" />
        <meta name="twitter:description" content="Data Scientist portfolio. Projects, skills, and experience." />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Adithya Reddy Geeda",
            "sameAs": [
              "https://github.com/AdithyaReddyGeeda",
              "https://www.linkedin.com/in/adithya-reddy-geeda/"
            ],
            "jobTitle": "Data Scientist",
            "description": "Portfolio of Adithya Reddy Geeda, Data Scientist. MS Engineering Data Science. Projects, skills, experience."
          }
        `}</script>
        {/* SEO: Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;