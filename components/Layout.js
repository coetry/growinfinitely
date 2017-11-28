import Head from 'next/head'
import Link from 'next/link'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import NewsLetter from '../components/NewsLetter'
export default ({children, title="StraightUp Growth"}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=no' />
    </Head>

    <div className="grid">

      <div className="logo-container">
      <NewsLetter />
        <Logo />

      </div>



      <div className="body-container">
        {children}
      </div>

      <Navigation />
    </div>

    <style jsx>{`

      .grid {
        display: grid;
        grid-template-columns: 1fr;
      }


      .logo-container {

        display:flex;
        justify-content:flex-end;
        margin-right:1em;
        margin-top:0;
        align-items:center;

      }

      .body-container {
        display: grid;
        row-column-gap: 30px;
        min-height: calc(100vh - 300px);
      }

      @media (max-width: 600px) {
        width: 80%;
      }

    `}</style>
  </div>

)
