/**
 * Title: Write a program using JavaScript on Home
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

import Header from "@/components/header/largeDevice/Header";
import RecentView1 from "@/components/home/RecentView1";
import RecentView2 from "@/components/home/RecentView2";
import RecentView3 from "@/components/home/RecentView3";
import Sponsored from "@/components/home/Sponsored";
import ProductCard from "@/components/shared/ProductCard";
import Head from "next/head";
import React from "react";

const Home = () => {
  const womensDress = [
    {
      title:
        "Deborah - red pencil pleated button back vintage dress inspired from custom made",
      price: 49.99,
      shop: "TheLinoLounge",
      thumbnail:
        "https://i.etsystatic.com/5620966/r/il/3ff048/4584504065/il_1140xN.4584504065_gwnv.jpg",
    },
    {
      title: "UNIQUE galaxy dress fishtail pencil style custom made all sizes",
      price: 120.0,
      shop: "HeartMyCloset",
      thumbnail:
        "https://i.etsystatic.com/5620966/r/il/84fa39/1545907429/il_1140xN.1545907429_nxob.jpg",
    },
    {
      title:
        "Deborah pencil pleated button back vintage dress inspired from custom made",
      price: 125.5,
      shop: "FlozzyDesignsOZ",
      thumbnail:
        "https://i.etsystatic.com/5620966/r/il/1890ca/1400605096/il_1140xN.1400605096_o5zu.jpg",
    },
    {
      title:
        "Dark RED polkadot Rose pencil dress + removable skirt wrap/ custom made all sizes 40s 50s",
      price: 180.5,
      shop: "LinenMade",
      thumbnail:
        "https://i.etsystatic.com/5620966/r/il/7eecaa/5237194658/il_794xN.5237194658_4c03.jpg",
    },
  ];

  return (
    <section className="">
      <Head>
        <title>Etsy ProjectX</title>
      </Head>
      <header className="bg-white pt-4 shadow">
        <Header />
      </header>
      <main className="">
        {/* <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {womensDress.map(({ title, price, shop, thumbnail }, index) => (
            <ProductCard
              key={index}
              product={{ title, price, shop, thumbnail }}
            />
          ))}
        </section> */}

        {/* <section className="bg-gradient-to-b from-[#feecd4] via-[#feecd4] to-white bg-cover p-8"> */}
        <section
          className="p-8"
          style={{
            background: "linear-gradient(to bottom, #feecd4 60%, white 40%)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl text-center">
              Welcome back,{" "}
              <span className="underline cursor-pointer">Taeso Ma</span>
            </h1>
            <RecentView1 />
          </div>
        </section>
        <section className="max-w-7xl mx-auto pb-8">
          <RecentView2 />
        </section>
        <section className="max-w-7xl mx-auto py-8">
          <Sponsored />
        </section>
        <section className="max-w-7xl mx-auto py-8">
          <RecentView3 />
        </section>
      </main>
    </section>
  );
};

export default Home;
