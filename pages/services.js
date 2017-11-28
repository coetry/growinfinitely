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
        </div>
       <section>

    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
      }

      .product-design {
        grid-column: 1 / 2;
      }

      .growth {
        grid-column: 2 / 3;
      }

      .service {
        border: 1px solid black;
        border-radius: 3px;
        padding: 20px;
        margin: 20px;
      }



    `}</style>
</Layout>
)
