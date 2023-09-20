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
import ProductCard from "@/components/shared/ProductCard";
import womensDress from "@/data/womensDress";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col gap-y-8">
      <header className="bg-white p-4 shadow">
        {/* This is for large device */}
        <Header />
      </header>
      <main className="px-4 max-w-7xl mx-auto">
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {/* This is for products card */}
          {womensDress.map(({ title, price, shop, thumbnail }, index) => (
            <ProductCard
              key={index}
              product={{ title, price, shop, thumbnail }}
            />
          ))}
        </section>
      </main>
    </section>
  );
};

export default Home;
