import Footer from '@/components/footer/footer'
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
        <Footer />
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  )
}
