import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../components/Logo.js'

const Value = styled.h1`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 1.1em;
`

const BlackHighlight = styled.span`
  background-color: black;
  color: white;
  padding: 10px;
`



export default () => (
  <div>
    <Logo />
    <Value>
      We are problem solvers who are
      obsessed with growth.
    </Value>
    <Value>
      We believe that most things
      are possible.
    </Value>
    <Value>
      We are builders, makers, and creatives
      assembled for a purpose.
    </Value>
    <Value>
      We challenge the norm and aren't
      afraid to go against conventional wisdom.
    </Value>
    <Value>
      We break the rules to learn something new
    </Value>
    <Value>
      We abhor stagnancies and complacencies
      because they are the antitheses of growth
    </Value>
    <Value>
      We are StraightUp <BlackHighlight>Growth</BlackHighlight>
    </Value>

  </div>
)
