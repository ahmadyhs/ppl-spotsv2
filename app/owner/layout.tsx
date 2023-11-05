// import Navbar from '../components/Navbar'

import Aside from "../components/Aside"

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grid grid-cols-8">
      <Aside />

      {children}
    </main>
  )
}
