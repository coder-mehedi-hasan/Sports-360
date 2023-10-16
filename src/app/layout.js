import GlobalProvider from '@/GlobalProvider/GlobalProvider'
import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


export const metadata = {
  title: 'Sports 360',
  description: 'Here are you can see Hot News of sports',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
          <GlobalProvider>
            <Toaster />
            {children}
          </GlobalProvider>
        </div>
      </body>
    </html>
  )
}
