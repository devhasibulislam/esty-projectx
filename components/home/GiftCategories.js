/**
 * Title: Write a program using JavaScript on GiftCategories
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

const GiftCategories = () => {
  const categories = [
    {
      title: "Anniversary gifts",
      thumbnail:
        "https://i.etsystatic.com/27751508/c/3000/2125/0/0/il/254978/4263660916/il_340x270.4263660916_c7z1.jpg",
    },
    {
      title: "Gifts for him",
      thumbnail:
        "https://i.etsystatic.com/30390460/r/il/c4f475/3585597525/il_340x270.3585597525_7ipd.jpg",
    },
    {
      title: "Gifts for her",
      thumbnail:
        "https://i.etsystatic.com/13949723/r/il/b3205a/2312278613/il_340x270.2312278613_yi3d.jpg",
    },
    {
      title: "Personalized gift ideas",
      thumbnail:
        "https://i.etsystatic.com/30390460/r/il/308ce9/3263040139/il_340x270.3263040139_7nus.jpg",
    },
    {
      title: "Wedding gifts",
      thumbnail:
        "https://i.etsystatic.com/11486790/r/il/09528c/2809353368/il_340x270.2809353368_l0rq.jpg",
    },
  ];

  return (
    <section className="flex flex-col gap-y-12">
      <article className="flex flex-col justify-center items-center gap-y-1">
        <h1 className="text-3xl">Explore one-of-a-kind finds</h1>
        <p className="text-sm text-slate-500">
          There&apos;s no Etsy warehouse—just millions of people selling the things
          they love
        </p>
      </article>

      <div className="flex flex-col gap-y-6">
        <h2 className="text-2xl">Shop our popular gift categories</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="rounded-lg border hover:shadow-lg transition-shadow ease-linear delay-100 cursor-pointer">
              <Image
                src={category.thumbnail}
                alt={category.title}
                width={200}
                height={200}
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
              <h2 className="p-4 text-center text-lg">{category.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftCategories;
