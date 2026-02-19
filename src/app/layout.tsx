import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tongole Tours | Experience Malawi the Indigenous Way',
  description: 'An indigenous Malawian-run tour operator providing immersive cultural, wilderness, and adventure experiences to local, regional, and international travellers.',
  keywords: 'Malawi tours, safari, Lake Malawi, eco-tourism, wildlife, indigenous, adventure, Tongole',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  )
}
