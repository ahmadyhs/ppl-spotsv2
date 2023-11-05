import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function TenantsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={inter.className}>
      <div className='absolute w-full items-center px-4 top-4 bg-transparent z-30'>
        <Navbar />
      </div>
      <div className="max-h-screen relative overflow-hidden w-screen shadow-lg cursor-pointer">
      </div>

      {children}
    </main>
  )
}
