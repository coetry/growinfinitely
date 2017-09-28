import Link from 'next/link'
import Logo from '../components/Logo.js'

export default () => (
  <div>
    <Logo />
    <div className="product-design-body">

      <div className="product-design-header">
        <h1>Product Design</h1>
        <p className="blurb">We build digital services and products for <strong>Web </strong>
        and <strong>Native</strong> platforms that your end-users will <strong>love</strong>.</p>
      </div>
      <div className="platforms">
        <h2>Web</h2>
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
          in the lab staying on top of the latest trends and
          technologies so we can always deliver a world class
          user experience.
        </p>
      </div>

      <div className="platforms">
        <h2>Native</h2>
        <p>
          Android, iOS, and Desktop are called native because
          they are the host platforms that guest applications
          (like a web browser) are installed and ran on. Although
          web browsers are reaching near native performance, nothing
          beats a fully native application in speed and overall user experience.
          StraightUp Growth has the expertise to build you a well designed native
          application that works seamlessly accross mobile and desktop operating systems.
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

      }

      .product-design-header {
        padding: 20px;
        margin: 20px;
      }

      .blurb {
        font-style: italic;
        text-align: center;
      }

      .platforms {
        padding: 20px;
        margin: 20px;
      }

      p {
        line-height: 2em;
      }

      h1 {
        color: black;
      }

      h2 {
        color: black;
      }

    `}</style>
  </div>
)
