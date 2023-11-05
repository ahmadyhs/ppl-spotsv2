import Navbar from '../components/Navbar'

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <section className='absolute w-full items-center px-4 top-4 bg-transparent z-30'>
        <Navbar />
      </section>

      {children}
    </main>
  )
}
