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
          It is a system that creates consistency across all your touchpoints.
        </p>
      </div>

      <div className="growth-services">
        <h2>Discoverability</h2>
        <p>
       We help you get found. We put your brand in the right places, so your people can discover and start a relationship with you.
        </p>
      </div>

      <div className="growth-services">
        <h2>Storytelling</h2>
        <p>
          Compelling visual and auditorial pieces serve as a way to illustrate the essence of your brand. We create these illustrations with the mindset of producing a reaction within your audience. This requires us to think rationally and creativly to design a story using conventional rehtoric.
        </p>
        <p> Uniting an idea with an emotion is a powerful way to produce a reaction from your audience. Compelling visual and auditorial pieces serve as a way to illustrate the essence of your brand. We enjoy sitting down and thinking creativly to design a story using unconventional rehtoric.</p>
      </div>
      <div className="growth-services">
        <h2>Social</h2>
        <p>
        We use your brand’s voice to communicate with people. We believe in being apart of your follower's life by enriching their experience throughout different social channels. It not about selling your service or product, But instead effectively selling your existence and vision.
        <p> social media has no secret, you just have to treat your followers as humans. </p>

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
