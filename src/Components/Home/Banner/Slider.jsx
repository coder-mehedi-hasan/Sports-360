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

const bannerImages = [{ image: cricket }, { image: football }, { image: cricketGround }, { image: footballGround }, { image: basketBoll }];

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} loop effect="fade" autoplay className="mySwiper">
        {bannerImages.map(({ image }) => (
          <SwiperSlide key={image}>
            <div className="relative ">
              <div className="absolute text-white bg-opacity-80 w-full h-full">
                <div className="flex justify-between w-full h-full ">
                  <div className="w-full lg:w-[50%]  bg-gradient-to-r from-[#29282863] to-[#00000000] h-full">text</div>
                  <div className="hidden lg:block w-[50%]">empty</div>
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
