import Logo from '../components/Logo.js'
import Link from 'next/link'


const servicesOverview = {
  textAlign: "center",
  marginBottom: "30px",
  fontSize: "1.1em"
}


export default () => (
  <div>
    <Logo />
    <div className="services-overview">
      <p style={servicesOverview}>We break our services down into two main categories.
        Either we're building you something special, or we're helping the world realize that you have
      something special.</p>
    </div>
    <center>
      <div className="container">
    	  <Link prefetch href="/product_design">
          <a className="service product-design">Product Design</a>
    	  </Link>
        <Link prefetch href="/growth">
          <a className="service growth">Growth</a>
    	  </Link>
      </div>
    </center>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        width: 50%;
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

      .services-overview {
        margin-left: 20%;
        margin-right: 20%;
      }

    `}</style>
	</div>
)
