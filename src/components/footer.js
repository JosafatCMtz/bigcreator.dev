import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className="bg-smoky-black text-cultured justify-around">
      <div className="grid lg:grid-cols-3 md:grid-cols-1">
        <div className="flex items-center justify-center mb-6">
          <StaticImage src="../images/icon_dark.png" alt="a bigcreator icon dark" className="w-44 h-44" />
        </div>
        <div className="flex items-center justify-center mb-6">
          <a href="#!" className="mr-6">
            <StaticImage src="../images/whatsapp-brands.png" alt="a bigcreator icon facebook" className="w-16 h-16" />
          </a>
          <a href="#!" className="mr-6">
            <StaticImage src="../images/facebook-brands.png" alt="a bigcreator icon facebook" className="w-16 h-16" />
          </a>
          <a href="#!" className="mr-6">
            <StaticImage src="../images/twitter-brands.png" alt="a bigcreator icon facebook" className="w-16 h-16" />
          </a>
        </div>
        <div className="flex items-center justify-center mb-6">
          <p>Made with ❤️ in MX © {new Date().getFullYear()} &middot; bigcreator.dev</p>
        </div>
      </div>
    </footer>
  );
}
