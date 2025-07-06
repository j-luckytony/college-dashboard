import type { Metadata } from 'next';

import '@fontsource/metropolis'; // Defaults to weight 400
import '@fontsource/metropolis/500.css'; // Medium weight
import '@fontsource/metropolis/600.css'; // SemiBold weight
import '@fontsource/metropolis/700.css'; // Bold weight

import './globals.css';

export const metadata: Metadata = {
  title: 'College Dashboard - Angela',
  description:
    'Personal college admissions dashboard tracking progress, deadlines, and applications',
  keywords: ['college', 'admissions', 'dashboard', 'education', 'applications'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-metropolis antialiased">{children}</body>
    </html>
  );
}
