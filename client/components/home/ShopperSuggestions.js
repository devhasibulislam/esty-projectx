/**
 * Title: Write a program using JavaScript on ShopperSuggestions
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

const ShopperSuggestions = () => {
  const recentThumbnails = [
    "https://i.etsystatic.com/5620966/c/2379/1891/0/40/il/b993b9/3945966809/il_116x116.3945966809_d7qe.jpg",
    "https://i.etsystatic.com/5620966/r/il/a06160/4584504603/il_116x116.4584504603_fr5r.jpg",
    "https://i.etsystatic.com/5620966/c/981/779/0/102/il/7522cb/5121158485/il_116x116.5121158485_1ia3.jpg",
    "https://i.etsystatic.com/5620966/r/il/84fa39/1545907429/il_116x116.1545907429_nxob.jpg",
  ];

  const suggestions = [
    {
      title: "Data Collection",
      totalItems: 11,
      thumbnails: [
        "https://i.etsystatic.com/5620966/c/1049/1049/0/0/il/8833d2/4370253044/il_175xN.4370253044_a4z1.jpg",
        "https://i.etsystatic.com/5620966/r/il/a06160/4584504603/il_175xN.4584504603_fr5r.jpg",
        "https://i.etsystatic.com/5620966/c/2246/2246/0/220/il/5a5722/1859607343/il_175xN.1859607343_f0h3.jpg",
        "https://i.etsystatic.com/5620966/r/il/84fa39/1545907429/il_175xN.1545907429_nxob.jpg",
      ],
    },
    {
      title: "Fashion",
      totalItems: 10,
      thumbnails: [
        "https://i.etsystatic.com/5620966/c/2052/2052/0/0/il/dd0061/3409618107/il_175xN.3409618107_kuqc.jpg",
        "https://i.etsystatic.com/5620966/c/1042/1042/0/0/il/298753/5121180849/il_175xN.5121180849_q206.jpg",
        "https://i.etsystatic.com/5620966/c/1587/1587/0/0/il/4b3d4b/4599950141/il_175xN.4599950141_4ztr.jpg",
        "https://i.etsystatic.com/5620966/c/981/981/0/1/il/7522cb/5121158485/il_175xN.5121158485_1ia3.jpg",
      ],
    },
    {
      title: "Clothes Dress",
      totalItems: 10,
      thumbnails: [
        "https://i.etsystatic.com/5620966/c/2155/2155/0/55/il/89493c/4914161621/il_175xN.4914161621_2n09.jpg",
        "https://i.etsystatic.com/5620966/r/il/a06160/4584504603/il_175xN.4584504603_fr5r.jpg",
        "https://i.etsystatic.com/5620966/r/il/5a64cd/4501138321/il_175xN.4501138321_obfp.jpg",
        "https://i.etsystatic.com/5620966/c/1915/1915/0/647/il/486024/1908100443/il_175xN.1908100443_qbbj.jpg",
      ],
    },
    {
      title: "Vintage Dress",
      totalItems: 9,
      thumbnails: [
        "https://i.etsystatic.com/5620966/r/il/c9ddab/2240611703/il_175xN.2240611703_mnik.jpg",
        "https://i.etsystatic.com/5620966/c/1681/1681/179/158/il/9fcbee/4408478221/il_175xN.4408478221_strw.jpg",
        "https://i.etsystatic.com/5620966/r/il/29e7b0/3554656015/il_175xN.3554656015_onx7.jpg",
        "https://i.etsystatic.com/5620966/c/2379/2379/0/0/il/b993b9/3945966809/il_175xN.3945966809_d7qe.jpg",
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl">
          Browse collections created by Etsy shoppers
        </h1>
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

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden cursor-pointer"
          >
            <p className="flex justify-between items-center py-2 px-3 font-bold">
              <span className="group flex flex-row items-center gap-x-2">
                {suggestion.title}{" "}
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
              <span className="text-sm font-normal">
                {suggestion.totalItems} items
              </span>
            </p>
            <div className="grid grid-cols-2 gap-1 w-full">
              {suggestion.thumbnails.map((thumbnail, index) => (
                <Image
                  key={index}
                  src={thumbnail}
                  alt={thumbnail}
                  width={100}
                  height={150}
                  className={
                    "h-[150px] w-full hover:opacity-50 object-cover transition-opacity ease-linear delay-100 border" +
                    " " +
                    (index === suggestion.thumbnails.length - 2
                      ? "rounded-bl-lg"
                      : "") +
                    " " +
                    (index === suggestion.thumbnails.length - 1
                      ? "rounded-br-lg"
                      : "")
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopperSuggestions;
