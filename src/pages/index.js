import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeaderImage from "../components/headerImage";
import AboutUs from "../components/aboutUs";
import Services from "../components/services";
import Team from "../components/team";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <HeaderImage />
      <AboutUs />
      <Services />
      <Team />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
