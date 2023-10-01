/**
 * Title: Write a program using JavaScript on SuggestedShops
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

const SuggestedShops = () => {
  const shops = [
    {
      thumbnails: [
        "https://i.etsystatic.com/11166440/c/1352/1075/329/248/il/1b0f1f/5333908240/il_340x270.5333908240_1gkv.jpg",
        "https://i.etsystatic.com/11166440/c/1439/1142/102/12/il/78021d/1501613240/il_340x270.1501613240_3nlr.jpg",
        "https://i.etsystatic.com/11166440/c/1412/1122/193/30/il/7be0d3/3755968277/il_340x270.3755968277_l2mu.jpg",
        "https://i.etsystatic.com/11166440/r/il/d6ebaa/1929745248/il_340x270.1929745248_316k.jpg",
      ],
      logo: "https://i.etsystatic.com/isla/48eb64/22801556/isla_75x75.22801556_5ng1ydc4.jpg?version=0",
      title: "10FingersArt",
      rating: 3,
      items: 177,
    },
    {
      thumbnails: [
        "https://i.etsystatic.com/33749906/c/2364/1879/333/131/il/08ca42/5327330101/il_340x270.5327330101_10ri.jpg",
        "https://i.etsystatic.com/33749906/r/il/3b4f3f/4847779037/il_340x270.4847779037_p6r2.jpg",
        "https://i.etsystatic.com/33749906/c/800/635/0/47/il/8aac53/4033852299/il_340x270.4033852299_mme7.jpg",
        "https://i.etsystatic.com/33749906/r/il/47bd16/4127889613/il_340x270.4127889613_hyw7.jpg",
      ],
      logo: "https://i.etsystatic.com/isla/143ccb/53851222/isla_75x75.53851222_d5t0w4up.jpg?version=0",
      title: "Luna Teaware",
      rating: 4,
      items: 407,
    },
    {
      thumbnails: [
        "https://i.etsystatic.com/16050399/r/il/febcd6/2765702735/il_340x270.2765702735_9vjm.jpg",
        "https://i.etsystatic.com/16050399/r/il/e80f93/3094371818/il_340x270.3094371818_liri.jpg",
        "https://i.etsystatic.com/16050399/r/il/e4bf51/2688517822/il_340x270.2688517822_ocl5.jpg",
        "https://i.etsystatic.com/16050399/c/2250/1786/0/303/il/7f9794/5050155918/il_340x270.5050155918_kj54.jpg",
      ],
      logo: "https://i.etsystatic.com/isla/d34a73/46117589/isla_75x75.46117589_2sd4jjqw.jpg?version=0",
      title: "LaBautamaskcostume",
      rating: 5,
      items: 617,
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-4">
      <article className="flex flex-col justify-center">
        <h1 className="text-2xl">
          Shops we think <br /> you&lsquo;ll love
        </h1>
        <p className="text-sm text-slate-500">Based on your recent activity</p>
      </article>
      {shops.map((shop, index) => (
        <div
          key={index}
          className="flex flex-col gap-y-4 border p-3 rounded-lg"
        >
          <div className="grid grid-cols-2 gap-1">
            {shop.thumbnails.map((thumbnail, index) => (
              <Image
                key={index}
                src={thumbnail}
                alt={thumbnail}
                width={100}
                height={120}
                className="rounded-md h-[120px] w-full object-cover hover:opacity-50 transition-opacity ease-linear delay-100 border"
              />
            ))}
          </div>
          <article className="flex flex-row gap-x-2 items-start justify-start">
            <Image
              src={shop.logo}
              alt={shop.logo}
              width={30}
              height={30}
              className="h-[30px] w-[30px] rounded-md object-cover border"
            />
            <div className="flex flex-row justify-between w-full items-center">
              <div className="flex flex-col gap-y-0.5">
                <p className="font-bold line-clamp-1">{shop.title}</p>
                <div className="flex flex-row items-center gap-x-4">
                  <span className="flex flex-row gap-x-0.5">
                    {Array.from(
                      { length: shop.rating },
                      (_, index) => index
                    ).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </span>
                  <span className="text-sm">{shop.items} items</span>
                </div>
              </div>
              <Button className="">
                <Favorite className="w-6 h-6" />
              </Button>
            </div>
          </article>
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

export default SuggestedShops;
