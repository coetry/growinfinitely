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

      { /*
        <section className="services-blurb">
          <span className="no">1</span>
          `Industries have been disrupting at a rapid pace due to the advances in technology
          and communications. Businesses and Brands can no longer survive without omnipresence.
          We dive deep below the surface to explore what that truly means right now and how
          we can keep pushing the boundaries.`
        </section> */}

      {/*  <section className="services-blurb">
          <span className="no">2</span>
         `It's hard to ignore the drastic impact technology has had on our lives.
         I'm sure you've also observed the drastic impact that design has had on our lives.
         We leverage design thinking to solve difficult problems through technology and design.
         We also know how to bring your project in front of the world. We can help you grow.`
        </section> */}

        <section className="services-blurb">
        {`It all starts with a product built around human centered design; a frictionless experience
          that doesn't require people to think too hard. Then through a system of identity building
          and messaging, we push your product into hearts and minds and keep it moving forward.
        `}
        </section>

        {/*
        <section className="services-blurb">
          `We'll help you generate leads
          and develop relationships with your customers. Nearly every industry has been disrupted
          by technology and design thinking. `
        </section>*/}

        

        <section className="services">
          <div>
        	  <Link prefetch href="/product_design">
              <a className="service-category product-design">PRODUCT DESIGN</a>
        	  </Link>
            <p>
              Let us build you something special.
            </p>
          </div>

          <div>
            <Link prefetch href="/growth">
              <a className="service-category growth">GROWTH</a>
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

      .services-blurb {
        width: 90%;
        border: 1px solid black;
      }

      .services {
        border: 1px solid black;
      }

      .service-category {
        background-color: black;
        color: white;
      }

      .no {
        color: white;
        background-color: black;
        padding: 3px;
        width: 5px;
      }



    `}</style>
</Layout>
)
