import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Baner from "./baner";

const Header = ({ menuLinks }) => (
  <header className="bg-cultured ml-0.5">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div>
          <Baner />
        </div>
        <div>
          <nav>
            <ul className="flex space-x-4">
              {menuLinks.map((link) => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link
                    className="text-smoky-black text-base hover:font-subheadline font-body"
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
