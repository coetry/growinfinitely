import Link from 'next/link'

export default function Navigation () {
  return (
    <div className="links">
      <ul>
        <li><Link prefetch href="/values">
        <a>values</a>
      </Link></li>
        <li><Link prefetch href="/services">
        <a>services</a>
      </Link></li>
      <li><Link prefetch href="/work-with-us">
        <a>work</a>
      </Link></li>
      <li><Link prefetch href="/hire">
        <a>hire</a>
      </Link></li>
      </ul>
      <style jsx>{`
        .links{
          margin-bottom: 0;
        }
        .links ul li {
          display: inline;
          list-style: none;
        }

        a {
          text-decoration: none;

          font-size: 1.2em;
        }
        a:visited {
          color: black;
        }
        a:hover {
          text-decoration:underline;

        }
        .mobile-mission{
          font-size:1.6em;

        }
      `}</style>
    </div>
  )
}
