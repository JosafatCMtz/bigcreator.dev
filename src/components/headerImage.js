import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

function HeaderImage() {
  return (
    <div>
      <div className=" h-[32rem] w-full relative bg-smoky-black/70">
        <StaticImage src="../images/header-image.jpeg" class="w-full h-full object-cover absolute mix-blend-overlay" alt="A Hero Image" />
        <div className="p-48">
          <h1 className="text-cultured text-6xl font-headline">We Build Software 🚀 💻</h1>
          <p className="text-cultured text-2xl font-subheadline">The Best Software Solutions 💯</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
