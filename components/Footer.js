import React from 'react'
import 'isomorphic-unfetch'

export default class Footer extends React.Component {
  static async getInitialProps() {
    const res = await fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    const json = await res.json()
    return {quoteText: json.quoteText,
            quoteAuthor: json.quoteAuthor}
  }
  render () {
    return (
      <div>
        <p>
          yo {this.props.quoteText} <strong>-{this.props.quoteAuthor}</strong>
        </p>
      </div>
    )
  }
}
