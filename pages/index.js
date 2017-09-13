import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../components/Logo.js'


const frontMission = {
  textAlign: "center",
  marginBottom: "30px",
  fontSize: "1.1em"
}

const Underline = styled.span`
  text-decoration: underline wavy black;
`

const Home = () => (
  <div>
    <Logo /><br />
      <div class="front-mission">
        <p style={frontMission}>We leverage the power of <Underline>technology</Underline> and <Underline>design</Underline> to grow individuals, businesses, and communities.</p>
      </div><br/><br/><br/><br/>
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
        z-index: 0;
        padding-top: 30px;
      }

      .main {
       flex: none;
       text-align: center;
     }

     .front-mission {
       padding: 30px;
     }

    `}</style>

  </div>
)



export default Home
