'use client';

import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      <main className="min-h-screen bg-gray-100 dark:bg-primary text-gray-900 dark:text-white">
        {children}
      </main>
    </ThemeProvider>
  );
} 