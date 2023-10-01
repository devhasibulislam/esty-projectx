/**
 * Title: Write a program using JavaScript on Footer1
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

import React from "react";

const Footer1 = () => {
  const stories = [
    {
      title: "A community doing good",
      description:
        "Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.",
    },
    {
      title: "Support independent creators",
      description:
        "There’s no Etsy warehouse - just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.",
    },
    {
      title: "Peace of mind",
      description:
        "Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.",
    },
  ];

  return (
    <section className="w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 48"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-[#feecd4] rotate-180 w-full"
        style={{ fill: "#feecd4" }}
      >
        <path d="M1400 0l-55 12-23 10-23 4-6-1-9 1-5 2-24 8h-11l-18-5-11-1-10-1h-7l-8 3-8 1-14-4v1l-3 1-9-5-3-1-17 2-10-1-9-1-8 1-7 1-2 1h-13l-2-1-13-2h-20l-11 2-14 3h-18l-10 1-3-1-2-1-4-1h-4l-16 1h-2l-7-1h-6l-8 1-6-2-5-1-2 1-20-1-10 2h-6l-11-1-9-1h-4l-3 1-19 1h-19l-3-1-11 1h-2l-7 3h-23l-3 1h-19l-16-1-17 1h-8l-2-1-20-2-4 1-4-1h-2l-12 1-2 1h-13l-9 1h-4l-6-1-10 1-9-1h-15l-9 2-12-2-12-2-3 2-5 2-11-3-6 1h-6l-28 1-5 2h-33l-3 1-4 2h-17l-5 1-4-1-7-1h-5l-4 1-13 3-2-2-2-1h-15l-22-1h-2l-11 1h-5l-2-1h-19l-9 1-6-1h-2l-9 2-15 2h-4l-12 1h-25l-12 1-7 1h-4l-4 1h-4l-4 1h-20l-3-1h-7l-1-1v-4l-1 1h-2l-9 1-2 2-6 2-7 1-5 2h-2l-3-2-8-1h-4l-11 3h-1l-3-2-11-3-20-6-9-3h-3l-9 2h-5l-11-4-13-3-11-15-21-4L0 0h1400z"></path>
      </svg>
      <div className="bg-[#feecd4]">
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex flex-col gap-y-12">
            <article className="flex flex-col gap-y-1 items-center">
              <h1 className="text-2xl">What is Etsy?</h1>
              <p className="text-sm text-slate-500 border-b border-dashed">
                Read our wonderfully weird story
              </p>
            </article>
            <div className="grid grid-cols-3 gap-x-8">
              {stories.map((story, index) => (
                <div key={index} className="flex flex-col gap-y-2">
                  <h2 className="text-xl">{story.title}</h2>
                  <p className="text-base text-slate-500">
                    {story.description}
                  </p>
                </div>
              ))}
            </div>
            <article className="flex flex-col gap-y-4 items-center">
              <h1 className="text-xl">
                Have a question? Well, we’ve got some answers.
              </h1>
              <button className="border-2 border-black px-4 py-2 rounded-full hover:px-6 transition-all ease-linear delay-100">
                Go to Help Center
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
