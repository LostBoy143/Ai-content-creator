import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex relative">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-5">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="flex itmes-center justify-start font-bold text-xl cursor-pointer">
                My Blog Creator
              </h1>
            </Link>
            <div className="justify-end hidden md:block">
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a className="text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  About
                </a>
                <a className="text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Github
                </a>
                <a className="text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Linkedin
                </a>
                <a className="text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
