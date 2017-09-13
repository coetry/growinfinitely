import Link from 'next/link'
import Logo from '../components/Logo.js'
export default () => (
  <div>
    <Logo />
    <div className="growth-body">
      <h1>Growth</h1>

      <p className="blurb">We've developed an integrated system of identity building and communications
      strategies to push your project towards infinite growth.</p>

      <div className="growth-services">
        <h2>Brand Identity</h2>
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

      <div className="growth-services">
        <h2>Media</h2>
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

      <div className="growth-services">
        <h2>Discoverability</h2>
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

      <div className="growth-services">
        <h2>Social</h2>
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


      <Link href="/services">
          <a> ⬅︎ </a>
      </Link>
    </div>

    <style jsx>{`
      .growth-body {
        margin-left: 100px;
        margin-right: 100px;

      }

      .blurb {
        font-style: italic;
        text-align: center;
      }

      .growth-services {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        margin: 20px;
      }

    `}</style>
  </div>
)
