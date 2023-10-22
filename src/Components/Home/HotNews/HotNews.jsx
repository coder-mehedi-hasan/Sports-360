"use client";
import Title from "@/Components/Title";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import NewsCard from "./NewsCard";

const HotNews = () => {
  return (
    <div className="my-container mt-10">
      <Title title={"Hot News"} description={"Here are you will see Latest Hot Sports News"} center={true} />
      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay
          className="mySwiper"
        >
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HotNews;
