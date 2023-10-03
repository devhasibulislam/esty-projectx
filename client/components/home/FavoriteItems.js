/**
 * Title: Write a program using JavaScript on FavoriteItems
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
 * Date: 01, October 2023
 */

import Image from "next/image";
import React from "react";
import Favorite from "../icons/Favorite";

const FavoriteItems = () => {
  const items = [
    {
      thumbnail:
        "https://i.etsystatic.com/29097119/c/2250/1788/0/961/il/e05a1e/3073104199/il_340x270.3073104199_ef61.jpg",
      title: "EMILIA Dress, Pencil silhouette,  Cocktail Tie Strap dress",
      shop: "happyjoyboutique",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/6706891/r/il/aaac12/1351723073/il_340x270.1351723073_crq9.jpg",
      title: "Veronica mermaid skirt",
      shop: "Maiden1969",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/17134074/c/3000/2382/0/0/il/baceab/5198902282/il_340x270.5198902282_2fqq.jpg",
      title: "Vintage 50s Woven Pencil Dress Big Button sz S",
      shop: "AinsElkeStyleHaus",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/15013437/c/400/318/0/0/il/db9618/4750969974/il_340x270.4750969974_i588.jpg",
      title: "3D Printed Vase in Spiral shape for Home Decor Flowers",
      shop: "TinkeringTings",
    },
  ];

  return (
    <section className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
      <article>
        <h1 className="text-2xl">
          Favorite the items you like to get instant recommendations
        </h1>
      </article>
      {items.map((item, index) => (
        <div
          key={index}
          className="group border rounded-lg hover:shadow transition-shadow delay-100 ease-linear relative cursor-pointer"
        >
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={300}
            height={200}
            className="rounded-t-lg h-[200px] w-full object-cover"
          />
          <article className="p-2.5">
            <h1 className="line-clamp-1 text-base">{item.title}</h1>
            <p className="line-clamp-1 text-sm text-slate-500">{item.shop}</p>
          </article>

          <Button className="absolute top-2 right-2 group-hover:opacity-100 opacity-0 transition-opacity delay-100 ease-linear">
            <Favorite className="w-6 h-6" />
          </Button>
          <Button className="absolute top-2 left-2 group-hover:opacity-100 opacity-0 transition-opacity delay-100 ease-linear border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                fillRule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      ))}
    </section>
  );
};

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={
        "bg-slate-100 p-1.5 flex justify-center items-center rounded-full hover:bg-slate-300 hover:text-white transition-colors duration-100" +
        " " +
        props.className
      }
    >
      {children}
    </button>
  );
}

export default FavoriteItems;
