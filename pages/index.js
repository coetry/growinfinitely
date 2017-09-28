import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Lead from '../components/Lead'

const Emphasize = styled.span`
  text-decoration: underline wavy #333;
`
const Home = () => (
  <Layout title="Home | StraightUp Growth">
    <div class="mission">
      <Lead>
        We leverage the power of <Emphasize>technology</Emphasize> and <Emphasize>design</Emphasize> to grow individuals, businesses, and communities.
      </Lead>
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


      .links {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 20px;
        margin-top: 100px;
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

       .mission {
         margin-top: 100px;
       }

    `}</style>

  </Layout>

)



export default Home
