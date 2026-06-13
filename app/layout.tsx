import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khakhra House — Artisan Khakhras & Snacks',
  description: 'Handcrafted traditional khakhras and snacks made with whole wheat and authentic spices. Loved by Gujarati and Marwadi families.',
  openGraph: {
    title: 'Khakhra House — Our Menu',
    description: 'Crispy, wholesome, traditional khakhras and snacks crafted with love.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
