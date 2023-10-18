/**
 * Title: Write a program using JavaScript on RecentView2
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
 * Date: 30, September 2023
 */

import Image from "next/image";
import React from "react";
import Favorite from "../icons/Favorite";

const RecentView2 = () => {
  const recentThumbnails = [
    "https://i.etsystatic.com/33208167/r/il/e0390f/4681827529/il_75x75.4681827529_m7cu.jpg",
  ];

  const recentProducts = [
    {
      thumbnail:
        "https://i.etsystatic.com/33918027/c/2941/2337/50/465/il/d15d49/5206676490/il_340x270.5206676490_8cq4.jpg",
      price: {
        amount: 193.55,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/45017423/r/il/c6ad00/5376818453/il_340x270.5376818453_ihvr.jpg",
      price: {
        amount: 68.16,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/13346155/c/2490/1979/234/191/il/136a5d/3149555444/il_340x270.3149555444_max4.jpg",
      price: {
        amount: 216.77,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/42344007/r/il/04fbf2/4969465555/il_340x270.4969465555_tb8w.jpg",
      price: {
        amount: 29.99,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/38699671/c/2000/1589/0/264/il/37085f/4442523071/il_340x270.4442523071_dgwn.jpg",
      price: {
        amount: 210.92,
        currency: "USD",
      },
    },
  ];

  const recentCategories = [
    {
      thumbnail:
        "https://i.etsystatic.com/34991569/r/il/1733b6/4687628324/il_75x75.4687628324_czgd.jpg",
      title: "tulum decor modern",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/34716735/c/2672/2124/171/102/il/8ef4dd/4193361254/il_75x75.4193361254_n6sr.jpg",
      title: "tall blue vase",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/33208167/r/il/87ba6d/4621600842/il_75x75.4621600842_pify.jpg",
      title: "3d vase",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/33208167/r/il/e0390f/4681827529/il_75x75.4681827529_m7cu.jpg",
      title: "green vase",
    },
  ];

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <h1>Because you viewed</h1>
        <div className="flex flex-row flex-wrap gap-1.5">
          {recentThumbnails.map((thumbnail, index) => (
            <Image
              key={index}
              src={thumbnail}
              alt={thumbnail}
              height={50}
              width={50}
              className="rounded-md cursor-pointer hover:shadow-md transition-shadow delay-100 ease-linear"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-10 justify-stretch gap-4">
        {recentProducts.map((product, index) => (
          <div
            key={index}
            className={
              "group relative lg:col-span-2 md:col-span-5 col-span-10 hover:shadow-lg rounded-lg transition-shadow delay-100 ease-linear"
            }
          >
            <Image
              src={product.thumbnail}
              alt={product.thumbnail}
              height={index === 0 ? 413 : 199}
              width={index === 0 ? 520 : 251}
              className="rounded-md cursor-pointer w-full h-full object-cover"
            />
            <span className="absolute left-2 bottom-2 bg-white px-2 rounded-full text-sm font-bold">
              <span className="text-xs font-normal">
                {product.price.currency}
              </span>{" "}
              {product.price.amount}
            </span>
            <Button className="absolute top-2 right-2 group-hover:opacity-100 opacity-0 transition-opacity delay-100 ease-linear">
              <Favorite className="w-6 h-6" />
            </Button>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {recentCategories.map((category, index) => (
          <div
            key={index}
            className="flex flex-row gap-x-2 items-center border px-4 py-2 w-full rounded-md hover:shadow cursor-pointer transition-shadow delay-100 ease-linear"
          >
            <Image
              src={category.thumbnail}
              alt={category.thumbnail}
              height={75}
              width={75}
              className="rounded-full h-[75px] object-cover"
            />
            <p className="group text-sm flex flex-row gap-x-2 items-center font-bold">
              {category.title}{" "}
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform delay-100 ease-linear"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </p>
          </div>
        ))}
      </div>
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

export default RecentView2;
