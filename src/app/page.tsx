import Link from 'next/link'

export default function HomeApp() {
  return (
    <main className='container py-10'>
      <Link href={'/'}>
        <h1 className='font-medium'>Boilerplate Next14</h1>
      </Link>
    </main>
  )
}
