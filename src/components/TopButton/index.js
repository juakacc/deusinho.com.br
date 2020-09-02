import React, { useState, useEffect } from 'react';

import './styles.css';

function TopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      toggleVisibility();
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="top-button">
      {visible && (
        <button onClick={scrollToTop} type="button" className="btn">
          TOPO
        </button>
      )}
    </div>
  );
}

export default TopButton;
