import * as React from "react";
import Bigcreator from "./bigcreator";
import { useStaticQuery, graphql } from "gatsby";

export default function Baner() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const defaultTitle = site.siteMetadata?.title;
  return (
    <div className="flex-shrink-0 flex items-center">
      <Bigcreator />
      <p className="text-smoky-black font-headline text-2xl">{defaultTitle}</p>
    </div>
  );
}
