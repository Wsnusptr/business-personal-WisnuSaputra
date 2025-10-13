"use client";

import { useRouter } from "next/navigation";
import { useLoading } from "@/components/providers/LoadingProvider";

export function useNavigateWithLoading() {
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();

  const navigateTo = (path: string, delay = 1500) => {
    showLoading();
    
    setTimeout(() => {
      router.push(path);
      
      // Hide loading after navigation
      setTimeout(() => {
        hideLoading();
      }, 500);
    }, delay);
  };

  return { navigateTo };
}