import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderImage from "../components/headerImage"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <HeaderImage />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
