import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import gsap from 'gsap';

function ParticleBackground(props) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(nameRef.current.querySelectorAll('.char'), 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: 'power4.out', delay: 0.5 }
    )
    .fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.5"
    );
  }, []);

  const name = "SATHEESHKUMAR P";
  const nameChars = name.split('').map((char, i) => (
    <span key={i} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
  ));

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 
          ref={nameRef}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-4 overflow-hidden"
        >
          {nameChars}
        </h1>
        <div ref={titleRef} className="overflow-hidden">
          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium">
            Backend Software Engineer
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors hoverable shadow-lg shadow-accent/20">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors hoverable">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div 
          className="w-1 h-12 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative"
        >
          <motion.div 
            className="w-full bg-accent absolute top-0 left-0"
            animate={{ 
              height: ['0%', '100%', '0%'],
              top: ['0%', '0%', '100%']
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
