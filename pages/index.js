import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Lead from '../components/Lead'
import {Keyframes, Frame} from 'react-keyframes'

const Emphasize = styled.span`
  text-decoration: underline wavy #333;
`

const Home = () => (
  <Layout title="Home | StraightUp Growth">

    <div className="container">

    <div className="disrupted">
      <p>Nearly every industry has been disrupted
      by technology and design thinking.</p>
    </div>

      <div className="mission">
        <p>
        we leverage the power of technology and design to grow
          <span className="gradient"> individuals,</span>
          <span className="gradient"> businesses, </span>
          <span className="gradient">and communities.</span>
        </p>
      </div>
    </div>

  <style jsx>{`

      .links {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
      }

      .links ul li {
        list-style:none;
        display: inline;
      }

      .container{
        display:grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
       }

      .mission{
         font-size: 1rem;
         text-align: center;
       }

       .disrupted {
         font-family: "Fira Sans";
         font-size: 2rem;
       }

       .gradient{
        -webkit-background-clip: text;
         text-fill-color: transparent;
         animation: hue 4s ease infinite;
         color: #f35626;
         background-image: linear-gradient(92deg, #f35626, #feab3a);


       }

        @keyframes hue {
          from {
            filter: hue-rotate(0deg);
          }

          to {
            filter: hue-rotate(-360deg);
          }
        }



    `}</style>

  </Layout>

)



export default Home
