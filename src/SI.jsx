import  { useEffect, useState } from 'react';
import './SI.css'; // Create this CSS file for styles

const ScrollIndicator = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = 7; // Total number of pages

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = window.innerHeight;
    const currentPageIndex = Math.min(Math.floor(scrollPosition / pageHeight), pages - 1);
    setCurrentPage(currentPageIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <svg id="transring" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 414 414" style={{ backgroundColor: 'lightblue' }}>
      <path id="Transparent_Ring" className="transrg"
        style={{ opacity: 0.4, fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeMiterlimit: 10 }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
      c-47.8,0-91-19.4-122.3-50.7"></path>
      <path id="Opaque_Ring" className="transrgwht"
        style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeMiterlimit: 10, strokeDasharray: '10, 1000' }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
      c-47.8,0-91-19.4-122.3-50.7"></path>
      {[...Array(pages)].map((_, index) => (
        <g key={index} className={`dots-nav dot${index} ${currentPage >= index ? 'active' : ''}`}>
          <g>
            <path className={`dotsst dotsfill${index}`} style={{ fill: '#0092FF', opacity: 1 }}
              d={`M${calculateDotPosition(index).x},${calculateDotPosition(index).y} c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S${calculateDotPosition(index).x + 3},${calculateDotPosition(index).y},${calculateDotPosition(index).x},${calculateDotPosition(index).y}z`} />
          </g>
          <g>
            <path className={`dotsstro${index}`} style={{ opacity: 1, fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeMiterlimit: 10 }}
              d={`M${calculateDotPosition(index).x},${calculateDotPosition(index).y} c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S${calculateDotPosition(index).x + 3},${calculateDotPosition(index).y},${calculateDotPosition(index).x},${calculateDotPosition(index).y}z`} />
          </g>
        </g>
      ))}
    </svg>
  );
};

const calculateDotPosition = (index) => {
  const positions = [
    { x: 84, y: 80 },
    { x: 206.8, y: 29 },
    { x: 332, y: 85 },
    { x: 380, y: 205 },
    { x: 335, y: 315 },
    { x: 210, y: 375 },
    { x: 88, y: 324 }
  ];
  return positions[index];
};

export default ScrollIndicator;
