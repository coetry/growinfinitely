import Link from 'next/link'
import Logo from '../components/Logo.js'

export default () => (
  <div>
    <Logo />
    <div className="product-design-body">
      <h1>Product Design</h1>

      <p className="blurb">We build digital services and products for <strong>Web </strong>
      and <strong>Native</strong> platforms that your end-users will <strong>love</strong>.</p>

      <div className="platforms">
        <h3>Web</h3>
        <p>
          We interact with the web on
          a daily and it sure isn't the
          same platform that it was 10 years ago
          or even just a few years back. As browsers
          evolve, client side experiences are becoming
          <strong> richer</strong>, <strong>deeper</strong>,
          and more <strong>interactive</strong>. Consumers
          expect faster response times and careful design
          to trust that you care about them. We're always
          in the lab studying the intersection of design and
          performance so we can deliver a world-class user experience.
        </p>
      </div>

      <div className="platforms">
        <h3>Native</h3>
        <p>
          Mobile phones are super computers in your pocket.
        </p>
      </div>

      <Link href="/services">
          <a> ⬅︎ </a>
      </Link>
    </div>

    <style jsx>{`
      .product-design-body {
        margin-left: 100px;
        margin-right: 100px;
        font-size: 1.5em;
      }

      .blurb {
        font-style: italic;
      }

      .platforms {
        border: 2px solid black;
        border-radius: 3px;
        padding: 20px;
        margin: 20px;
      }

    `}</style>
  </div>
)
