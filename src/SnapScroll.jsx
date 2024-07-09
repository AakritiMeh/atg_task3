import { useState, useRef, useEffect } from 'react';
import './SnapScroll.css';
import CircularProgressBar from './CircularProgressBar';

const SnapScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    const totalHeight = container.scrollHeight - container.clientHeight;
    const scrollFromTop = container.scrollTop;
    const scrollPercent = (scrollFromTop / totalHeight) * 100;
    setScrollPosition(scrollPercent);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="snap-scroll-container">
      <CircularProgressBar progress={scrollPosition} />
      <div className="container min-w-full" ref={containerRef}>
        <div className="page">Page 1</div>
        <div className="page">Page 2</div>
        <div className="page">Page 3</div>
        <div className="page">Page 4</div>
        <div className="page">Page 4</div>
        <div className="page">Page 4</div>
        <div className="page">Page 4</div>
      </div>
    </div>
  );
};

export default SnapScroll;