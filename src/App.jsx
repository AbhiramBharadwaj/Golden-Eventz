import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import logger from './utils/logger';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HeroCard from './components/HeroCard/HeroCard';
import ReviewsSection from './components/ReviewSection/ReviewSection';
import WhoWeAre from './components/HeroCard/WhoWeAre';
import Footer5 from './components/Footer/Footer5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setMeta } from './utils/meta';

const BlogPage = lazy(() => import('./pages/BlogPage'));
const About = lazy(() => import('./pages/About'));
const OurWork = lazy(() => import('./pages/OurWork'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PricePage = lazy(() => import('./pages/PricePage'));

// Logger for route changes
const RouteLogger = () => {
  const location = useLocation();
  useEffect(() => {
    logger.info(`Navigated to ${location.pathname}`);
  }, [location]);
  return null;
};

// Main App component
const App = () => {
  useEffect(() => {
    logger.info('App component mounted');
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-in-out',
    });
    logger.debug('AOS initialized with duration 400 and ease-in-out easing');
  }, []);

  return (
    <Router>
      <RouteLogger />
      <Navbar />
      <Suspense fallback={<main role="status" className="min-h-screen pt-40 text-center">Loading page…</main>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/price-page" element={<PricePage />} />
          <Route path="/blog-page" element={<BlogPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

// Error Boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logger.error(`An error occurred in component tree: ${error.toString()}, details: ${JSON.stringify(errorInfo)}`);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// HomePage component
const HomePage = () => {
  useEffect(() => {
    logger.info('HomePage rendered');
    setMeta({
      title: "Golden Eventz & Production | Luxury Event Management Shimoga",
      description:
        "Golden Eventz delivers luxury weddings, corporate events, music nights, decor, AV, catering, and makeup across Shimoga, Bangalore, Mysore, and Mangalore with flawless planning and execution.",
      keywords: [
        "Golden Eventz",
        "event management Shimoga",
        "wedding planners Karnataka",
        "corporate event planners",
        "music nights and sangeeth",
        "luxury decor and production",
      ],
    });
  }, []);

  return (
    <>
      <Hero />
      <WhoWeAre />
      <HeroCard />
      <ReviewsSection />
      <Footer5 />
    </>
  );
};

// Wrap the entire App in the ErrorBoundary
const AppWithBoundary = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

export default AppWithBoundary;
