import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center rounded p-10 bg-white dark:bg-gray-900 text-black dark:text-white">
      <hr className="border-gray-300 dark:border-gray-700 w-full mb-6" />

      <nav className="grid grid-flow-col gap-4 mb-4">
        {/* Removed inner <a> tags and moved classes to Link */}
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contactUs" className="link link-hover">
          Contact
        </Link>
      </nav>

      <nav className="mb-6">
        <div className="grid grid-flow-col gap-6">
          {/* Social icons are fine as <a> because they aren't inside <Link> */}
          <a href="#" className="text-2xl">
            <FaTwitter className="text-orange-500" />
          </a>

          <a href="#" className="text-2xl">
            <FaYoutube className="text-orange-500" />
          </a>

          <a href="#" className="text-2xl">
            <FaFacebookSquare className="text-orange-500" />
          </a>
        </div>
      </nav>

      <aside>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by Sehar
          Ajmal.
        </p>
      </aside>
    </footer>
  );
}

export default Footer;