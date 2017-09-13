import Link from 'next/link'
import Logo from '../components/Logo.js'
export default () => (
  <div>
    <Logo />
    <h1>Growth</h1>
      <Link href="/services">
          <a> ⬅︎ </a>
      </Link>
  </div>
)
