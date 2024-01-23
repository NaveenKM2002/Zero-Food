import React from 'react';
// import './style.css';
import { useSpring, animated } from '@react-spring/web';

export  function App1() {
  const styles = useSpring({
    loop: true,
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '2000' },
  });

  return (
    <center><animated.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 50,
        ...styles,
      }}
    /></center>
  );
}
