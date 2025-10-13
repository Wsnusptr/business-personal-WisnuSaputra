"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface PageLoaderProps {
  isLoading: boolean;
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
  const animationRef = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (isLoading && animationRef.current && !lottieInstance.current) {
      lottieInstance.current = lottie.loadAnimation({
        container: animationRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/load.json", // Skating animation
      });
    }

    return () => {
      if (lottieInstance.current) {
        lottieInstance.current.destroy();
        lottieInstance.current = null;
      }
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#0A1F2E]">
      <div
        ref={animationRef}
        className="w-64 h-64 md:w-80 md:h-80"
      />
    </div>
  );
}