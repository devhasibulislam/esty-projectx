/**
 * Title: Write a program using JavaScript on ActivityDresses4
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

const ActivityDresses4 = () => {
  const recentProducts = [
    {
      thumbnail:
        "https://i.etsystatic.com/42098306/r/il/c51531/5279493236/il_300x300.5279493236_acaw.jpg",
      title: "crop tops",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/40350497/r/il/c94b43/5227769654/il_300x300.5227769654_i1x7.jpg",
      title: "lingerie sets",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/45519982/r/il/fa5756/5336719183/il_300x300.5336719183_brex.jpg",
      title: "women's jackets and coats",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/44866592/r/il/a08e43/5319329092/il_300x300.5319329092_6p7l.jpg",
      title: "women's costumes",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/41462511/r/il/2846a0/5272020971/il_300x300.5272020971_jtns.jpg",
      title: "patterns and blueprints",
    },
    {
      thumbnail:
        "https://i.etsystatic.com/37339230/r/il/908b46/4739574259/il_300x300.4739574259_47eh.jpg",
      title: "bridesmaid dresses",
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <article className="flex flex-col gap-y-1">
        <h1 className="text-2xl flex flex-row items-center gap-x-2 group w-fit cursor-pointer">
          Recommended categories for you{" "}
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
        </h1>
        <p className="text-sm text-slate-500">Based on your activity</p>
      </article>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-8 justify-items-center">
        {recentProducts.map((product, index) => (
          <div key={index} className="border-b-2 border-b-transparent hover:border-b-black transition-colors ease-linear delay-100 flex flex-col gap-y-2">
            <Image
              src={product.thumbnail}
              alt={product.thumbnail}
              height={120}
              width={120}
              className="h-[120px] w-[120px] rounded-full cursor-pointer object-cover mx-auto hover:scale-105 transition ease-linear delay-100 border"
            />
            <p className="text-center">{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityDresses4;
