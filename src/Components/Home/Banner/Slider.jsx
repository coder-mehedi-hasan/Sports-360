/* eslint-disable react/no-unescaped-entities */
"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import football from "@/assart/banner/Football.jpg";
import basketBoll from "@/assart/banner/basketboll.jpg";
import cricket from "@/assart/banner/cricket.jpg";
import cricketGround from "@/assart/banner/cricketG.jpg";
import footballGround from "@/assart/banner/footballG.jpg";
import Image from "next/image";
import Link from "next/link";

const bannerImages = [{ image: cricket }, { image: football }, { image: cricketGround }, { image: footballGround }, { image: basketBoll }];

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} loop effect="fade" autoplay className="mySwiper">
        {bannerImages.map(({ image }) => (
          <SwiperSlide key={image}>
            <div className="relative ">
              <div className="absolute text-white bg-opacity-80 w-full h-full">
                <div className="flex justify-between items-center w-full h-full bg-gradient-to-r from-[#000000] to-[#00000000]">
                  <div className="w-full lg:w-[50%]  ">
                    <div className="ml-20 space-y-8">
                      <h2 className="md:text-2xl lg:text-4xl font-bold">
                        TRAVEL WITH THE TEAM <br /> TO AN AWAY GAME
                      </h2>
                      <p className="hidden lg:block">
                        Welcome to our sports news hub, your ultimate source for the latest in current sports news and the hottest stories in the world of sports. Stay in the know with real-time
                        updates on your favorite teams, athletes, and games. From thrilling game highlights to in-depth analysis, we've got you covered. Explore the dynamic world of sports with us and
                        never miss a beat.
                      </p>
                      <button className="border px-4 py-2 rounded-md bg-[#35B7FF] font-semibold">
                        <Link href="/all-news">Show News </Link>
                      </button>
                    </div>
                  </div>
                  <div className="hidden lg:block w-[50%]"></div>
                </div>
              </div>
              <Image src={image} width={1600} height={500} className="h-[full] max-h-[600px] w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
