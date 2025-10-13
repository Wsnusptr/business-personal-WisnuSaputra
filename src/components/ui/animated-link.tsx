"use client";

import Link from "next/link";
import { useLoading } from "@/components/providers/LoadingProvider";
import { ReactNode, MouseEvent } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function AnimatedLink({
  href,
  children,
  className,
  target,
  rel,
  onClick,
}: AnimatedLinkProps) {
  const { showLoading, hideLoading } = useLoading();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Don't show loading for external links or anchor links
    if (target === "_blank" || href.startsWith("#") || href.startsWith("http")) {
      if (onClick) onClick();
      return;
    }

    // Show loading animation
    e.preventDefault();
    showLoading();

    if (onClick) onClick();

    // Navigate after a short delay
    setTimeout(() => {
      window.location.href = href;
      
      // Hide loading after navigation
      setTimeout(() => {
        hideLoading();
      }, 500);
    }, 800);
  };

  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}