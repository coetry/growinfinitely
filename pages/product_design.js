import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div className="product-design-body">

      <div className="product-design-header">
        <h1>Product Design</h1>
        <p className="blurb">We build digital services and products for <strong>Web </strong>
        and <strong>Native</strong> platforms.</p>
      </div>
      <div className="platforms">
        <h2><strong>Web</strong></h2>
        <p>
          {`The web isn't the
          same platform that it was 10 years ago
          or even just a few years back. As browsers
          evolve, client side experiences are becoming
          richer, deeper, and more interactive. People
          expect faster response times and careful design
          to trust that you care about them.`}
        </p>
      </div>

      <div className="platforms">
        <h2 className><strong>Native</strong></h2>
        <p>
          {`iOS, Android and Desktop are called native because
          they are the host platforms that guest applications
          (like a web browser) are installed and ran on. Although
          web browsers are reaching near native performance, nothing
          beats a fully native application in speed and overall user experience.`}
        </p>
      </div>

      <div className="platforms">
        <h2 className><strong>VR/AR</strong></h2>
        <p>
          Android, iOS, and Desktop are called native because
          they are the host platforms that guest applications
          (like a web browser) are installed and ran on. Although
          web browsers are reaching near native performance, nothing
          beats a fully native application in speed and overall user experience.
        </p>
      </div>

      <div className="platforms">
        <h2 className><strong>Blockchain</strong></h2>
        <p>
          Android, iOS, and Desktop are called native because
          they are the host platforms that guest applications
          (like a web browser) are installed and ran on. Although
          web browsers are reaching near native performance, nothing
          beats a fully native application in speed and overall user experience.
        </p>
      </div>

      <Link href="/services">
          <a> ⬅︎ </a>
      </Link>
    </div>

    <style jsx>{`




      .product-design-body {


      }

      .product-design-header {
        padding-bottom:25px;
      }

      .blurb {
        font-style: italic;
        text-align: center;
      }

      .platforms {
        margin-top: 20px;
        padding-right:20%;
        padding-left:20%;

      }
      .platforms h2{
        background-color:black;
        color:white;
        padding:5px;
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
  </Layout>
)
