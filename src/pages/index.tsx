import * as React from "react"

// styles
const pageStyles = {
  color: "#1010101",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#FFD51E",
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        bigcreator.dev
        <br />
        <span style={headingAccentStyles}>— we already have our site!</span>
        🎉🎉🎉
      </h1>
    </main>
  )
}

export default IndexPage
