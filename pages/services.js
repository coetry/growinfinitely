import Link from 'next/link'
import Layout from '../components/Layout'

{/* Growth: It's tech, data, and design driven marketing. */}

const servicesOverview = {
  textAlign: "center",
  marginBottom: "30px",
  fontSize: "1.1em"
}


export default () => (
  <Layout>

      <div className="container">

        <section>
          Industries have been disrupting at a rapid pace due to the advances in technology
          and communications.
        </section>

        <section>
          <div>
        	  <Link prefetch href="/product_design">
              <a className="service product-design">Product Design</a>
        	  </Link>
            <p>
              Let us build you something special.
            </p>
          </div>

          <div>
            <Link prefetch href="/growth">
              <a className="service growth">Growth</a>
        	  </Link>
            <p>
              Let us help the world realize that you have something special.
            </p>
          </div>
       </section>
     </div>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: left;
        grid-gap:1px;
      }

      .product-design {
        grid-column: 1 / 2;
      }

      .growth {
        grid-column: 2 / 3;
      }

      .service {
        background-color: black;
        color: white;
      }



    `}</style>
</Layout>
)
