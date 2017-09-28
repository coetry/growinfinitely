import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div className="growth-body">
      <div className="growth-header">
        <h1>Growth</h1>
        {/* Growth: It's tech, data, and design driven marketing. */}
        <p className="blurb">We've developed an integrated system of identity building and communications
      strategies to push your project towards infinite growth. </p>
      </div>
      <div className="growth-services">
        <h2>Brand Identity</h2>
        <p>
          Why do you exist. A strong brand identity allows you to answer this question. It appeals to the senses. It creates
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
        <h2>Media</h2>
        <p>
We produce digital content whether that's through photography, videography or virtual experiences. We amplify your brand identity across all discovery channels.
        </p>
      </div>



      <div className="growth-services">
        <h2>Social</h2>
        <p>
We help you communicate your brand identity with your audience.
        </p>
      </div>


      <Link href="/services">
          <a> ⬅︎ </a>
      </Link>
    </div>

    <style jsx>{`
      .growth-body {

      }

      .growth-header {

      }

      .blurb {
        font-style: italic;
        text-align: center;
      }

      .growth-services {

      }

      h1, h2 {
        color: black;
      }


    `}</style>
  </Layout>
)
