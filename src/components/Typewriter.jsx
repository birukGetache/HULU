import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, speed = 30, className = '', style = {} }) => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0); // Use ref to track the current character index

  useEffect(() => {
    indexRef.current = 0; // Reset indexRef when text changes
    setDisplayedText(''); // Reset displayed text when text changes

    const timer = setInterval(() => {
      setDisplayedText(prev => {
        const nextIndex = indexRef.current + 1; // Calculate the next index
        if (nextIndex > text.length) {
          clearInterval(timer); // Stop updating when text is fully displayed
          return prev; 
        }
        indexRef.current = nextIndex; // Update indexRef for the next character
        return text.slice(0, nextIndex); // Display the text up to the next index
      });
    }, speed);

    return () => clearInterval(timer); // Cleanup interval on component unmount or text/speed change
  }, [text, speed]);

  return <p className={className} style={style}>{displayedText}</p>;
};

export default Typewriter;
