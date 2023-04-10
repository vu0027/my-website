import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Wave = () => {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wave = waveRef.current;
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(wave, {
      duration: 10,
      ease: 'power1.inOut',
      scaleX: 1.5,
      scaleY: 1.2,
    }).to(wave, {
      duration: 10,
      ease: 'power1.inOut',
      scaleX: 1,
      scaleY: 1,
    });
  }, []);

  return <div className="wave-container" ref={waveRef}></div>;
};

export default Wave;