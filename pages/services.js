import Logo from '../components/Logo.js'
import Link from 'next/prefetch'

export default () => (
  <div>
    <Logo />
    <div className="container">
  	  <Link prefetch href="/product_design">
        <h1 className="service product-design">Product Design</h1>
  	  </Link>
      <Link prefetch href="/growth">
        <h1 className="service growth">Growth</h1>
  	  </Link>
    </div>

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
        border: 2px solid black;
        border-radius: 3px;
        padding: 20px;
        margin: 20px;
      }
    `}</style>
	</div>
)
