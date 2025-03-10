import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0, timestamp: 0 });
  const [trail, setTrail] = useState<CursorPosition[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Check for hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isClickable);
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (mousePosition.timestamp === 0) return;

    const newTrail = [...trail, mousePosition].slice(-20); // Keep only the last 20 positions
    setTrail(newTrail);

    const interval = setInterval(() => {
      setTrail(prevTrail => {
        if (prevTrail.length <= 1) return prevTrail;
        return prevTrail.slice(1); // Remove the oldest position
      });
    }, 40);

    return () => clearInterval(interval);
  }, [mousePosition]);

  // Generate a color based on position
  const getColor = (index: number) => {
    const hue = (mousePosition.x % 360); // Use mouse X position for hue
    const saturation = 80;
    const lightness = 60;
    const opacity = 0.8 - (index * 0.04);
    
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {trail.map((position, index) => (
            <motion.div
              key={`${position.timestamp}-${index}`}
              className="pointer-events-none fixed top-0 left-0 z-50"
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ 
                opacity: 0,
                scale: 0.5,
                x: position.x - 8, // Center the dot
                y: position.y - 8  // Center the dot
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: getColor(index),
                mixBlendMode: 'difference',
                pointerEvents: 'none',
                zIndex: 9999 - index,
                filter: 'blur(1px)'
              }}
            />
          ))}
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999]"
            animate={{
              x: mousePosition.x - 12, // Center the circle
              y: mousePosition.y - 12, // Center the circle
              scale: isHovering ? 1.5 : 1,
              backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
            }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300,
              mass: 0.5
            }}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              border: '2px solid hsl(var(--primary))',
              mixBlendMode: 'difference'
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CursorTrail; 