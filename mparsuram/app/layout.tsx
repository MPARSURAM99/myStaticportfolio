import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parsuram Maharana - Full Stack Developer',
  description: 'Full Stack Developer specializing in Java, Spring Boot, Angular, and MERN Stack. Building modern web applications with cutting-edge technologies.',
  keywords: 'Full Stack Developer, Java, Spring Boot, Angular, React, MERN Stack, Web Development',
  authors: [{ name: 'Parsuram Maharana' }],
  openGraph: {
    title: 'Parsuram Maharana - Full Stack Developer',
    description: 'Full Stack Developer specializing in Java, Spring Boot, Angular, and MERN Stack',
    url: 'https://mparsuram.vercel.app',
    siteName: 'Parsuram Maharana Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}