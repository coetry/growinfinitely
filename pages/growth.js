import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div className="growth-body">
      <div className="growth-header">
        <h1>Growth</h1>
        {/* Growth: It's tech, data, and design driven marketing. */}
        <p className="blurb">"We've developed an integrated system of identity building and communications
      strategies to push your project towards growth." </p>
      </div>
      <div className="grid">
      <div className="growth-services">
        <h2>Brand Identity</h2>
        <p>
          Why do you exist? A strong brand identity allows you to answer this question. It appeals to the senses. It creates
          curiosity, excitement, and genuine emotions in followers of your brand.
          Its a system that creates consistency across all your touchpoints. We can help you get started.
        </p>
      </div>

      <div className="growth-services">
        <h2>Discoverability</h2>
        <p>
       We help you get found. We put your brand in the right places, so people can discover and start a relationship with you.
        </p>
      </div>

      <div className="growth-services">
        <h2>Storytelling</h2>
        <p>
          We produce engaging media to tell stories about your brand.
        </p>
      </div>
      <div className="growth-services">
        <h2>Social</h2>
        <p>
          We help you communicate your brand identity with your audience.
        </p>
      </div>
      </div>






      <Link href="/services">
          <a> ⬅︎ </a>
      </Link>
    </div>

    <style jsx>{`
      .growth-body {
        display:flex;
      }
      .grid{
        display:inline-grid;
        grid-template-columns: 1fr 1fr;

      }

      .growth-header {
        width:20%;
      }


      .blurb {
        font-style: italic;
        padding:20px;
      }

      .growth-services {

        line-height: 2em;
        display:grid;
        grid-template-columns:1fr;
        width:40%;
        margin-top:10%
      }

      h1,  {
        color: black;
      }

      h2{
        background-color:black;
        color:white;
        font-weight: bold;

      }


    `}</style>
  </Layout>
)
