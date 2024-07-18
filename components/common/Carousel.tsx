"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { CustomSection } from "../layout/CustomSection";
import { useEffect, useRef } from "react";

SwiperCore.use([Navigation]);

export function Carousel() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <CustomSection>
      <div className="col-span-12 py-[120px]">
        <div className="flex justify-between items-center mb-10">
          <p className="text-6xl font-bold">Latest works</p>
          <div className="flex space-x-4">
            <div ref={prevRef} className="cursor-pointer text-2xl">
              &larr;
            </div>
            <div ref={nextRef} className="cursor-pointer text-2xl">
              &rarr;
            </div>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative group overflow-hidden">
              <div className="transition-transform duration-300 transform group-hover:rotate-3 group-hover:scale-125">
                <Image
                  src="/assets/sample-project-1.jpg"
                  alt="Project 1"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <p className="text-xl mt-2">SWISS TYPOGRAPHY</p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group overflow-hidden">
              <div className="transition-transform duration-300 transform group-hover:rotate-3 group-hover:scale-125">
                <Image
                  src="/assets/sample-project-2.jpg"
                  alt="Project 2"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <p className="text-xl mt-2">THE ACT</p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group overflow-hidden">
              <div className="transition-transform duration-300 transform group-hover:rotate-3 group-hover:scale-125">
                <Image
                  src="/assets/sample-project-3.jpg"
                  alt="Project 3"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <p className="text-xl mt-2">COPENHAGEN</p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group overflow-hidden">
              <div className="transition-transform duration-300 transform group-hover:rotate-3 group-hover:scale-125">
                <Image
                  src="/assets/sample-project-4.jpg"
                  alt="Project 4"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <p className="text-xl mt-2">MOBILE APP</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </CustomSection>
  );
}
