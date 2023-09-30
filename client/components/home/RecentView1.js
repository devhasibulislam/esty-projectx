/**
 * Title: Write a program using JavaScript on RecentView1
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

const RecentView1 = () => {
  const recentThumbnails = [
    "https://i.etsystatic.com/5620966/r/il/a06160/4584504603/il_75x75.4584504603_fr5r.jpg",
    "https://i.etsystatic.com/5620966/r/il/84fa39/1545907429/il_75x75.1545907429_nxob.jpg",
    "https://i.etsystatic.com/5620966/c/981/779/0/102/il/7522cb/5121158485/il_75x75.5121158485_1ia3.jpg",
    "https://i.etsystatic.com/5620966/c/2379/1891/0/40/il/b993b9/3945966809/il_75x75.3945966809_d7qe.jpg",
    "https://i.etsystatic.com/5620966/c/1915/1520/0/844/il/486024/1908100443/il_75x75.1908100443_qbbj.jpg",
  ];

  const recentProducts = [
    {
      thumbnail:
        "https://i.etsystatic.com/37815744/c/2000/1588/0/222/il/9e18a4/5323316077/il_680x540.5323316077_eswp.jpg",
      price: {
        amount: 193.55,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/15013437/c/405/323/0/39/il/a684dd/2129979960/il_340x270.2129979960_c0xi.jpg",
      price: {
        amount: 68.16,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/38276030/c/2000/1588/0/437/il/0cd977/5218443194/il_340x270.5218443194_t9oy.jpg",
      price: {
        amount: 216.77,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/37363038/r/il/ee306b/4700845567/il_340x270.4700845567_azbs.jpg",
      price: {
        amount: 29.99,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/27333946/c/2000/1589/0/128/il/5c3484/5166283912/il_340x270.5166283912_o659.jpg",
      price: {
        amount: 210.92,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/9000595/c/3000/2382/0/183/il/378635/5323487361/il_340x270.5323487361_a7rd.jpg",
      price: {
        amount: 120.0,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/41502895/c/1080/857/0/0/il/6f4f40/5133790743/il_340x270.5133790743_hmb4.jpg",
      price: {
        amount: 31.28,
        currency: "USD",
      },
    },
  ];

  const recentCategories = [
    {
      thumbnail:
        "https://i.etsystatic.com/5620966/r/il/84fa39/1545907429/il_75x75.1545907429_nxob.jpg",
      title: "vintage white pencil dress",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/5620966/r/il/5bd5e4/1545907267/il_75x75.1545907267_prf3.jpg",
      title: "custom made dress 1940s",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/5620966/r/il/341867/2135923992/il_75x75.2135923992_a8lx.jpg",
      title: "heartmycloset",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/34866546/r/il/b0b9ad/3866527573/il_75x75.3866527573_qdzm.jpg",
      title: "wiggle skirt",
    },
  ];

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <h1>Because you viewed</h1>
        <div className="flex flex-row gap-1.5">
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
              "group relative col-span-2 hover:shadow-lg rounded-lg transition-shadow delay-100 ease-linear" +
              " " +
              `${index === 0 ? "row-span-2 col-span-4" : ""}`
            }
          >
            <Image
              src={product.thumbnail}
              alt={product.thumbnail}
              height={index === 0 ? 413 : 199}
              width={index === 0 ? 520 : 251}
              className="rounded-md cursor-pointer w-full h-full object-cover"
            />
            <span className="absolute left-2 bottom-2 bg-white px-2 rounded-full text-base font-bold">
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
      <div className="flex flex-row justify-between gap-x-4">
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
              className="rounded-full"
            />
            <p className="group text-sm flex flex-row gap-x-2 items-center">
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

export default RecentView1;
