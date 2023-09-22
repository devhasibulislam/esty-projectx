/**
 * Title: Write a program using JavaScript on Header
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

import Logo from "@/components/icons/Logo";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Favorite from "@/components/icons/Favorite";
import Bell from "@/components/icons/Bell";
import Down from "@/components/icons/Down";
import Image from "next/image";
import Cart from "@/components/icons/Cart";

const Header = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <nav className="max-w-7xl mx-auto">
      <div className="flex flex-row flex-wrap items-center gap-4">
        <Logo className="text-[f1641e] h-10 w-20" />
        <SearchBar />
        <Button>
          <Favorite className="h-6 w-6" />
        </Button>
        <Button className="flex flex-row items-center">
          <Bell className="h-6 w-6" />
          <Down className="h-6 w-6" />
        </Button>
        <Button className="flex flex-row items-center">
          {imageLoaded && (
            <div
              className={`bg-gray-200 h-[24px] w-[24px] max-w-full rounded-full animate-pulse border`}
            ></div>
          )}
          {!imageLoaded && (
            <Image
              src="https://i.etsystatic.com/site-assets/images/global-nav/no-user-avatar.svg"
              alt="user avatar"
              height={24}
              width={24}
              className="rounded-full h-[24px] w-[24px] max-w-full object-cover border"
              onLoad={handleImageLoad}
              onError={() => console.error("1. Error loading image :(")}
            />
          )}
          <Down className="h-6 w-6" />
        </Button>
        <Button className="relative">
          <Cart className="h-6 w-6" />
          <span className="absolute -top-2 right-0 text-xs bg-slate-700 text-white p-0.5 rounded-full h-6 w-6 flex justify-center items-center">
            9+
          </span>
        </Button>
      </div>
    </nav>
  );
};

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={
        "bg-slate-100 p-3 rounded-full hover:bg-slate-300 hover:text-white transition-colors duration-100" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  );
}

export default Header;
