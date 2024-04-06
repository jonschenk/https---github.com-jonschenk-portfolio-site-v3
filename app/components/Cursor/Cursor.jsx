'use client'

import React, { useEffect, useRef, useState } from 'react'
import './Cursor.css'

function Cursor() {
  const cursorRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updatePosition = (ref, x, y) => {
    if (ref.current) {
      const offset = ref.current.offsetWidth / 2;
      ref.current.style.left = `${x - offset}px`;
      ref.current.style.top = `${y - offset}px`;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        updatePosition(cursorRef, e.clientX, e.clientY);
      });

      window.addEventListener('mousedown', () => {
        setIsMouseDown(true);
        if (cursorRef.current) {
          cursorRef.current.style.transform = 'scale(2)'; // Double the size
        }
      });

      window.addEventListener('mouseup', () => {
        setIsMouseDown(false);
        if (cursorRef.current) {
          cursorRef.current.style.transform = 'scale(1)'; // Return to original size
        }
      });
    }
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
    </>
  )
}

export default Cursor