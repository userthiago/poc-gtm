import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { GA_TRACKING_ID } from '../helpers/consts';

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

export function usePageViews(): void {
  const location = useLocation();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize(GA_TRACKING_ID);
      window.GA_INITIALIZED = true;
    }
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);

    ReactGA.modalview(`${location.pathname}/modal`);
  }, [location]);
}
