import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To Do list ',
  description: 'Boost Productivity with Our Innovative To-Do List App - Discover the Advantages, Disadvantages, and Expert Tips for Efficient Task Management. Try it today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"/>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Other meta tags and stylesheets */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
