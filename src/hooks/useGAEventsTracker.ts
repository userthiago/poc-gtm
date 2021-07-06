import ReactGA from 'react-ga';

interface TrackEventData {
  (action?: string, label?: string): void;
}

const useGAEventsTracker = (category = 'category'): TrackEventData => {
  const trackEvent: TrackEventData = (action = 'action', label = 'label') => {
    ReactGA.event({ category, action, label });
  };
  return trackEvent;
};

export default useGAEventsTracker;
