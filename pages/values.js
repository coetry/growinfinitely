import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Value = styled.div`
  padding-bottom: 50px;
  font-size: 1.1em;
  width: 40%;
`

const BlackHighlight = styled.span`
  background-color: black;
  color: white;
`



export default () => (
  <Layout>
    <div className="container">
      <Value>
        We are problem solvers who are
        obsessed with growth.
      </Value>
      <Value>
        We start with the why.
      </Value>
      <Value>
        We deploy first-principles thinking.
      </Value>
      <Value>
        We are builders, makers, and creatives
        assembled for a purpose.
      </Value>
      <Value>
        We test everything and let the data tell us
        stories.
      </Value>
      <Value>
        We believe that everyday is a new day and a chance to grow.
      </Value>
      <Value>
        We are StraightUp <BlackHighlight>Growth</BlackHighlight>
      </Value>
    </div>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    `}</style>
  </Layout>
)
