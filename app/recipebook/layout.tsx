import '../globals.css'
import type { ReactNode } from 'react'

export const metadata = { title: 'Recipe Book', description: 'Personal recipe organizer' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}