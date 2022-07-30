import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

function HeaderImage() {
  return (
    <div>
      <div className=" h-[32rem] w-full relative bg-cyber-yellow/50">
        <StaticImage src="../images/header-image.jpeg" class="w-full h-full object-cover absolute mix-blend-overlay" alt="A Hero Image" />
        <div className="p-24">
          <h1 className="text-cultured text-6xl font-headline">We build Software</h1>
          <p className="text-cultured text-2xl font-subheadline">The best software solutions!</p>
          <p className="text-cultured text-body">
            Photo by&ensp;
            <a href="https://unsplash.com/@hackcapital?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Hack Capital&ensp;
            </a>
            on&ensp;
            <a href="https://unsplash.com/s/photos/software?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
