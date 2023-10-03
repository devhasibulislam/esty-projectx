/**
 * Title: Write a program using JavaScript on Sponsored
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
import React, { useRef } from "react";
import Favorite from "../icons/Favorite";

const Sponsored = () => {
  const sponsors = [
    {
      thumbnail:
        "https://i.etsystatic.com/27274726/c/1174/933/0/200/il/bee5bd/2811554592/il_680x540.2811554592_5s0y.jpg",
      price: {
        amount: 155.94,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/VID_129560714_124506_674_zmar0d.mp4",
      price: {
        amount: 276.0,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_vfwouf.mp4",
      price: {
        amount: 293.08,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://i.etsystatic.com/45578016/r/il/79fd95/5363342639/il_680x540.5363342639_1ij1.jpg",
      price: {
        amount: 54.09,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://v.etsystatic.com/video/upload/ac_none,c_crop,du_15,h_1080,q_auto:good,w_720,x_0,y_198/LeMuse_gray-green_LOVER_dress_hcnbxu",
      price: {
        amount: 80.5,
        currency: "USD",
      },
    },
    {
      thumbnail:
        "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_1648_tp9ovp.mp4",
      price: {
        amount: 53.02,
        currency: "USD",
      },
    },
  ];

  const handleVideoHover = (event, isHovered) => {
    const video = event.target;
    if (video) {
      if (isHovered) {
        video
          .play()
          .catch((error) => console.error("Error playing video:", error));
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
      <div className="flex flex-col justify-center">
        <p className="text-sm flex gap-x-2 items-center">
          Sponsored{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="w-3.5 h-3.5 cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
        </p>
        <h2 className="text-2xl">By ETSY Seller</h2>
      </div>
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          onMouseEnter={() => handleVideoHover(index, true)}
          onMouseLeave={() => handleVideoHover(index, false)}
          className="relative group"
        >
          {sponsor.thumbnail.includes("v.") ? (
            <video
              height="216"
              width="auto"
              loop
              muted
              className="rounded-lg h-[216px] object-cover object-center w-full hover:shadow"
              onMouseEnter={(e) => handleVideoHover(e, true)}
              onMouseLeave={(e) => handleVideoHover(e, false)}
            >
              <source src={sponsor.thumbnail} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={sponsor.thumbnail}
              alt={sponsor.thumbnail}
              width={418}
              height={216}
              className="rounded-lg h-[216px] w-full object-cover hover:shadow"
            />
          )}

          {sponsor.thumbnail.includes("v.") && (
            <span className="absolute bottom-2 right-2 border p-0.5 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
          <Button className="absolute top-2 right-2 group-hover:opacity-100 opacity-0 transition-opacity delay-100 ease-linear border">
            <Favorite className="w-6 h-6" />
          </Button>

          <span className="absolute left-2 bottom-2 bg-white px-2 rounded-full text-sm font-bold border group-hover:opacity-100 opacity-0 transition-opacity delay-100 ease-linear">
            <span className="text-xs font-normal">
              {sponsor.price.currency}
            </span>{" "}
            {sponsor.price.amount}
          </span>
        </div>
      ))}

      <div className="flex flex-col justify-center">
        <p className="text-sm">
          <b>Fun fact:</b> behind every sponsored item there is an Etsy seller
          hoping you&apos;ll check out their shop
        </p>
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

export default Sponsored;
