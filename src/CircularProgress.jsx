// CircularProgress.jsx
import  { useState, useEffect } from 'react';
import './CircularProgress.css';
import PropTypes from "prop-types"

const CircularProgress = ({ currentPage, totalPages }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentPage / totalPages) * 100);
  }, [currentPage, totalPages]);

  return (
    <div className="circular-progress">
      <svg viewBox="0 0 100 100">
        <circle className="progress-background" cx="50" cy="50" r="45" />
        <circle 
          className="progress-bar" 
          cx="50" 
          cy="50" 
          r="45" 
          strokeDasharray={`${progress}, 100`}
        />
      </svg>
    </div>
  );
};

CircularProgress.propTypes={
    currentPage:PropTypes.number.isRequired,
    totalPages:PropTypes.number.isRequired

}


export default CircularProgress;