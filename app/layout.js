import './globals.css'
import Navbar from '@/components/navbar/nav'

export const metadata = {
  title: 'TMSL Conference',
  description: 'Get the latest updates of any upcoming events',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
