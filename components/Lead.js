
export default ({children}) => (
  <div>
    <p>
      {children}
    </p>
    <style jsx>{`
      @media (max-width: 600px) {
        font-size: 0.5em;
      }

    `}</style>
  </div>
)
