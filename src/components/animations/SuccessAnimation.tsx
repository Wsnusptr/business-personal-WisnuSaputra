"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface SuccessAnimationProps {
  onComplete?: () => void;
}

export default function SuccessAnimation({ onComplete }: SuccessAnimationProps) {
  const confettiRef = useRef<HTMLDivElement>(null);
  const handshakeRef = useRef<HTMLDivElement>(null);
  const confettiAnimationRef = useRef<AnimationItem | null>(null);
  const handshakeAnimationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    // Load confetti animation (full screen, transparent)
    if (confettiRef.current) {
      confettiAnimationRef.current = lottie.loadAnimation({
        container: confettiRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/1PWE6XCSBh.json", // Confetti explosion
      });
    }

    // Load handshake animation (centered, delayed)
    if (handshakeRef.current) {
      setTimeout(() => {
        handshakeAnimationRef.current = lottie.loadAnimation({
          container: handshakeRef.current!,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "/EA3kZCcQZU.json", // Handshake
        });

        // Call onComplete when handshake animation finishes
        handshakeAnimationRef.current.addEventListener("complete", () => {
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
        });
      }, 300); // Delay handshake by 300ms for elegant stagger
    }

    // Cleanup
    return () => {
      confettiAnimationRef.current?.destroy();
      handshakeAnimationRef.current?.destroy();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Confetti - Full screen with blend mode for transparency */}
      <div
        ref={confettiRef}
        className="absolute inset-0 w-full h-full"
        style={{
          mixBlendMode: "screen",
        }}
      />
      
      {/* Handshake - Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={handshakeRef}
          className="w-64 h-64 md:w-80 md:h-80"
        />
      </div>
    </div>
  );
}