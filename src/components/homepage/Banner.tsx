import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto">
      <div className="bg-slate-200 rounded-2xl grid grid-cols-2 gap-4 items-center">
        <div className="space-y-4 p-8 pl-36">
          <h2 className="text-3xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h2>
          <button className="btn btn-primary">View the list</button>
        </div>
        <div className="p-8">
          <Image src={bannerImg} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
