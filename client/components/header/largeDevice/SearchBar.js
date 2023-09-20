/**
 * Title: Write a program using JavaScript on SearchBar
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 19, September 2023
 */

import Search from "@/components/icons/Search";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative flex-1">
      {/* Display Searchbar */}
      <div className="flex flex-row items-center gap-x-2 border border-black rounded-full w-full">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search for anything"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          className="form-input focus:outline-none focus:ring-0 focus:border-transparent border-transparent rounded-l-full w-full h-full text-lg px-4 py-3"
        />
        <button className="rounded-r-full px-6 py-3 bg-slate-100 p-3 hover:bg-slate-300 hover:text-white duration-100">
          <Search className="w-6 h-6" />
        </button>
      </div>

      {/* Display Search Result */}
      <div className=""></div>
    </div>
  );
};

export default SearchBar;
