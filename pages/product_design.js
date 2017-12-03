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
          {` There's been a revolution in the web. Client side experiences are becoming
          richer, deeper, and more interactive. Firefox came back, JavaScript (EcmaScript)
            isn't just a little scripting language anymore, HTTP/2 is officially here, Web Assembly and WebVR
            are also ready for production.`}
        </p>
      </div>

      <div className="platforms">
        <h2 className><strong>Native</strong></h2>
        <p>
          {`It's a mobile only world. The desktop has become replaced by tablets for most consumers, unless your profession requires it.
            Phones your gateway to the "Internet Of Things". Talk to us about building your next iOS or Android app.
            `}
        </p>
      </div>

      <div className="platforms">
        <h2 className><strong>VR/AR</strong></h2>
        <p>
          Virtual Reality is here and it changes everything. It enables immersive and compelling experiences for a new era of computing and brand interactions.
          Augmented Reality allows you to merge the physical and digital worlds.
        </p>
      </div>

      <div className="platforms">
        <h2 className><strong>Blockchain</strong></h2>
        <p>
          {`What's powerful enough to rebuild an entire country? Blockchains. Built upon math and a decentralized democracy,
          Blockchains enable a newer level of integrity, security, and insurance. This has been made possible through the recent
          advances in distributed computing and processing power. Let's talk about building a DAPP (Decentralized Application).`}
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
