
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/nav'

import './globals.css'


export const metadata = {
  title: 'TMSL Conference',
  description: 'Get the latest updates of any upcoming events',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  )
}
