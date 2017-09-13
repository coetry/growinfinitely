import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>StraightUp Growth</title>
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
          <style jsx global>{`
             body {
              font-family: Avenir;
             }

             a {
               display: inline-block;
               margin: 0 15px;
               text-decoration: none;
               text-transform: uppercase;
               font-size: 1em;
               color: gray;
             }
             a:visited {
               color: gray;
               text-transform: uppercase;
               text-decoration: none;
             }
             a:hover {
               color: black;
             }

             h1 {
               text-transform: uppercase;
               font-weight: 100;
               color: gray;
               font-size: 1.5em;
             }

             h2 {
               text-transform: uppercase;
               font-weight: 100;
               color: gray;
               font-size: 1.0em;
             }
          `}</style>
        </body>
      </html>
    )
  }
}
