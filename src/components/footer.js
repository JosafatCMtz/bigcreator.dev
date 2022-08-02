import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import content from "./content"

export default function Footer() {
  const url = content.footer.links
  return (
    <footer className="bg-smoky-black text-cultured justify-around">
      <div className="grid lg:grid-cols-3 md:grid-cols-1">
        <div className="flex items-center justify-center mb-6">
          <StaticImage src="../images/icon_dark.png" alt="a bigcreator icon dark" className="w-44 h-44" />
        </div>
        <div className="flex items-center justify-center mb-6">
          <a href={url.whatsapp} className="mr-6" target="_blank">
            <StaticImage src="../images/whatsapp-brands.png" alt="a bigcreator icon whatsapp" className="w-16 h-16" />
          </a>
          <a href={url.twitter} className="mr-6" target="_blank">
            <StaticImage src="../images/facebook-brands.png" alt="a bigcreator icon facebook" className="w-16 h-16" />
          </a>
          <a href={url.twitter} className="mr-6" target="_blank">
            <StaticImage src="../images/twitter-brands.png" alt="a bigcreator icon twitter" className="w-16 h-16" />
          </a>
        </div>
        <div className="flex items-center justify-center mb-6">
          <p>Made with ❤️ in MX © {new Date().getFullYear()} &middot; bigcreator.dev</p>
        </div>
      </div>
    </footer>
  );
}
