import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Lead from '../components/Lead'
import MediaQuery from 'react-responsive'

const Emphasize = styled.span`
  text-decoration: underline wavy #333;
`

const Home = () => (
  <Layout title="Home | StraightUp Growth">

    <div className="container">
      <div className="mission">
        <p>
        we leverage the power of technology and design to grow <span className="gradient">individuals, businesses, </span>and <span className="gradient">communities</span>.
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
        display:flex;
        align-items: center;
        justify-content: center;
       }

      .mission{

         font-size: 1.5rem;



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
