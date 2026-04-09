import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Simple analytics tracking
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_TRACKING_ID', {
          page_path: location.pathname + location.search
        });
      }
    };

    trackPageView();
  }, [location]);

  return null;
};

export default Analytics;
