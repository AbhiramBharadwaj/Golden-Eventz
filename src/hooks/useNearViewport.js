import { useEffect, useRef, useState } from 'react';

/** Native image lazy loading does not defer CSS backgrounds. Load them nearby. */
export default function useNearViewport() {
  const ref = useRef(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsNear(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsNear(true);
        observer.disconnect();
      }
    }, { rootMargin: '300px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isNear };
}
