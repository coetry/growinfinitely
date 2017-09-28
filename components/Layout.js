import Head from 'next/head'
import Link from 'next/link'
import Logo from '../components/Logo'

export default ({children, title="StraightUp Growth"}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <div className="grid">

      <div className="logo-container">
        <Logo />
      </div>

      <div className="body-container">
        {children}
      </div>

    </div>

    <style jsx>{`

      .grid {
        display: grid;
        grid-template-columns: 1fr;
      }


      .logo-container {
        margin: auto;
        padding-bottom: 100px;
      }

      .body-container {
        margin-left: 20%;
        margin-right: 20%;
        display: grid;
        row-column-gap: 30px;
      }



    `}</style>
  </div>

)
