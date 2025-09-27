import { useEffect, useRef, useState } from "react";

const useScrollToBottom = (callback: () => void, threshold: number = 100) => {
  const [isAlreadyWas, setIsAlreadyWas] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `0px 0px ${threshold}px 0px`,
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isAlreadyWas) {
        callback();
        setIsAlreadyWas(true)
      }
    }, options);

    if (tagRef.current) observerRef.current.observe(tagRef.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [callback, threshold]);

  return { tagRef };
};

export default useScrollToBottom;