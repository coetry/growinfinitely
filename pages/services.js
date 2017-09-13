import Logo from '../components/Logo.js'
import Link from 'next/link'

export default () => (
  <div>
    <Logo />
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
    `}</style>
	</div>
)
