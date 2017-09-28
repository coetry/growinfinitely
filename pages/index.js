import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../components/Logo.js'

const Underline = styled.span`
  text-decoration: underline wavy black;
`

const Home = () => (
  <div className="home">
    <Logo />
    <div class="mission">
      <p>We leverage the power of <Underline>technology</Underline> and <Underline>design</Underline> to grow individuals, businesses, and communities.</p>
    </div>
    <div className="links">
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
    </div> {/* .links */}


  <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: grid;
        grid-template-columns: 1fr;
        padding-top: 30px;
      }

      .links {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 20px;
        margin-top: 20px;
        margin-left: 25%;
        margin-right: 25%;
      }


       a {
         text-decoration: none;
         text-transform: uppercase;
         font-size: 1.2em;
       }
       a:visited {
         color: black;
       }
       a:hover {
         color: black;
         font-family: 'Fira Mono'
       }

     p {
       text-align: left;
       font-size: 1.7em;
       margin-left: 25%;
       margin-right: 25%;
     }

    `}</style>

  </div>

)



export default Home
