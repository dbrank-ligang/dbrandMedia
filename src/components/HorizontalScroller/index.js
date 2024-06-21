import React, { useRef, useState, useEffect } from 'react';
import './HorizontalScroller.css';

const HorizontalScroller = ({ children }) => {
  const scrollerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);

  const handleScroll = () => {
    const { scrollLeft } = scrollerRef.current;
    if(scrollLeft > 0){
      console.log(scrollLeft)
      setShowLeftButton(scrollLeft);
    }
  };

  const scrollTo = (direction) => {
    console.log(1111)
    const containerWidth = scrollerRef.current.offsetWidth;
    const newScrollLeft = direction === 'left' ? Math.max(0, scrollLeft - containerWidth) : scrollLeft + containerWidth;
    scrollerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    setScrollLeft(newScrollLeft);
  };

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="horizontal-scroller-container">
      <div
        className="horizontal-scroller-wrapper"
        ref={scrollerRef}
        style={{ transform: `translateX(${-scrollLeft}px)` }}
        onScroll={handleScroll}
      >
        {children}
      </div>
      <button className="scroll-button left" onClick={() => scrollTo('left')}>
          ←
        </button>
      {/* {showLeftButton && (
        <button className="scroll-button left" onClick={() => scrollTo('left')}>
          ←
        </button>
      )} */}
      <button className="scroll-button right" onClick={() => scrollTo('right')}>
        →
      </button>
    </div>
  );
};

export default HorizontalScroller;