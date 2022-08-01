import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeaderImage from "../components/headerImage";
import AboutUs from "../components/aboutUs";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <HeaderImage />
      <AboutUs />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
