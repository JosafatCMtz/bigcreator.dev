import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeaderImage from "../components/headerImage";
import AboutUs from "../components/aboutUs";
import Services from "../components/services";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <HeaderImage />
      <AboutUs />
      <Services />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
