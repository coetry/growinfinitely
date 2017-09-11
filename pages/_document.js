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
          `}</style>
        </body>
      </html>
    )
  }
}
