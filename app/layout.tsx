import './globals.css'
import type { ReactNode } from 'react'
import TRPCProvider from '@/lib/trpc/react'
import { Toaster } from '@/components/ui/sonner'

export const metadata = { title: 'Recipe Book', description: 'Personal recipe organizer' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>
          {children}
          <Toaster />
        </TRPCProvider>
      </body>
    </html>
  )
}