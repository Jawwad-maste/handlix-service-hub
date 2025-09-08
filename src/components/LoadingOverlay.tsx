import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingOverlayProps {
  onComplete?: () => void;
  variant?: 'beat' | 'letters';
}

const LoadingOverlay = ({ onComplete, variant = 'letters' }: LoadingOverlayProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll when loading
    document.body.classList.add('loading-active');
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('loading-active');
      onComplete?.();
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading-active');
    };
  }, [onComplete]);

  // --- Letter by letter animation ---
  const LetterAnimation = () => {
    const letters = ['H', 'A', 'N', 'D', 'L', 'I', 'X'];
    
    return (
      <div className="flex items-center justify-center">
        {letters.map((letter, index) => {
          if (index === 0) {
            // Replace gradient H with logo image
            return (
              <motion.img
                key={letter}
                src="/Handlix-logo-without-background.png"
                alt="Handlix Logo"
                className="w-20 h-20 mr-2 object-contain"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  scale: {
                    duration: 1,
                    delay: 0.5,
                    ease: "easeInOut"
                  }
                }}
              />
            );
          } else {
            // Remaining letters
            return (
              <motion.span
                key={letter}
                className="text-6xl font-black text-heading"
                initial={{ 
                  opacity: 0, 
                  x: -30,
                  scale: 0.5
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + (index - 1) * 0.15,
                  ease: "backOut"
                }}
              >
                {letter}
              </motion.span>
            );
          }
        })}
      </div>
    );
  };

  // --- Beat animation for logo ---
  const BeatAnimation = () => (
    <motion.img
      src="/Handlix-logo-without-background.png"
      alt="Handlix Logo"
      className="w-24 h-24 object-contain"
      animate={{ scale: [0.96, 1.04, 0.96] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  // --- Instant Display for reduced motion ---
  const InstantDisplay = () => (
    <div className="flex items-center justify-center">
      <img 
        src="/Handlix-logo-without-background.png" 
        alt="Handlix Logo" 
        className="w-20 h-20 mr-2 object-contain"
      />
      <span className="text-6xl font-black text-heading">ANDLIX</span>
    </div>
  );

  // Check reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          aria-live="polite"
          aria-label="Handlix loading"
        >
          <div className="text-center">
            {prefersReducedMotion ? (
              <InstantDisplay />
            ) : (
              variant === 'letters' ? <LetterAnimation /> : <BeatAnimation />
            )}
            
            <motion.p
              className="mt-8 text-body-light font-medium text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: prefersReducedMotion ? 0 : 1, duration: 0.5 }}
            >
              Handling life's essentials, effortlessly.
            </motion.p>

            {/* Progress indicator */}
            <motion.div 
              className="mt-8 w-48 h-1 bg-border rounded-full overflow-hidden mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: prefersReducedMotion ? 0 : 1.5 }}
            >
              <motion.div
                className="h-full bg-gradient-brand"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { LoadingOverlay };
