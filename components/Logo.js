import Link from 'next/prefetch'
import styled from 'styled-components'



export default () => (
  <div className="logo-container">
    <center>
      <Link href='/'>
        <img style={{padding: "50px"}} src='/static/V2_beta.png' />
      </Link>
    </center>
  </div>
)
