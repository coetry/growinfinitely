import Layout from '../components/Layout'
import Lead from '../components/Lead'
import styled from 'styled-components'

const ProtoLead = styled(Lead)`
  > p {
    font-size: 1em;
    color: indianred;
  }
`

const Emphasize = styled.span`
  text-decoration: underline wavy #333;
`

export default () => (
  <Layout>
	  <h1>Work With Us</h1>

    <ProtoLead>
      We want to work with forward thinking people that aren't afraid to take risks or <Emphasize>step</Emphasize> (it's not enough to simply think) outside of the box.
    </ProtoLead>

    <style jsx>{`
      h1 {
        text-align:center;
      }
    `}</style>
	</Layout>
)
