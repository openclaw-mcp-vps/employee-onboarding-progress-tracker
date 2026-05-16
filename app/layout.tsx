import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Employee Onboarding Progress Tracker',
  description: 'Track new hire onboarding completion across teams. Real-time dashboard for HR managers and team leads.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a6d44454-690f-47eb-85eb-b2655b7eae3e"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
