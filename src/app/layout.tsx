import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import { Toaster } from "sonner";
import { LoadingProvider } from "@/components/providers/LoadingProvider";
import PopupAd from "@/components/sections/popup-ad";

export const metadata: Metadata = {
  title: "Business | Wisnu Saputra",
  description: "Solusi lengkap untuk karir, bisnis, kreativitas, teknologi, dan dukungan profesional Anda.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <LoadingProvider>
          <ErrorReporter />
          <Toaster position="top-right" richColors />
          <PopupAd />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}