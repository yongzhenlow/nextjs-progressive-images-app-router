import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="p-3">
      <ul className="flex flex-row items-center justify-center space-x-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  )
}
