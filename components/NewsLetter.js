

export default () => (
  <div>
    <form>
      <div className="newsletter-container">
        <input type="text" placeholder="yo"></input>
        <img width="40" src="https://icon.now.sh/mail_outline" />
      </div>
    </form>

    <style jsx>{`
      input, .sign-up {
        border-bottom: solid 2px black;
        height: 30px;
        font-family: 'Fira Mono'
      }
      form {
        padding: 20px;
      }
      .newsletter-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
      }
      .sign-up {
        width: 30px;
      }
    `}</style>
  </div>


)
