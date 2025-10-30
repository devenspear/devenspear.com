import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Deven Spear',
  description: 'Personal website of Deven Spear',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <main>{children}</main>
      </body>
    </html>
  )
}
