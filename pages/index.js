import Link from 'next/prefetch'
import styled from 'styled-components'
import Logo from '../components/Logo.js'


const Home = () => (
  <div>
    <Logo /><br /><br /><br /><br />
    <div className="home">
      <div className="main">
        <Link prefetch href="/values">
          <a>values</a>
        </Link>
        <Link prefetch href="/services">
          <a>services</a>
        </Link>
        <Link prefetch href="/work-with-us">
          <a>work</a>
        </Link>
        <Link prefetch href="/hire">
          <a>hire</a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }

      .main {
       flex: none;
       text-align: center;
     }

     a {
       display: inline-block;
       margin: 0 15px;
       text-decoration: none;
       text-transform: uppercase;
       font-size: 2em;
     }
     a:visited {
       color: gray;
       text-transform: uppercase;
       text-decoration: none;
     }
     a:hover {
       color: black;
     }

    `}</style>

  </div>
)



export default Home
