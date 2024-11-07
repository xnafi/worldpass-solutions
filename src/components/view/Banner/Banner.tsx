/* eslint-disable react/no-unescaped-entities */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import lambo1 from "../../../../public/assets/banner.jpg";
import lambo2 from "../../../../public/assets/banner.jpg";
import lambo3 from "../../../../public/assets/banner.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <motion.div className="sticky top-0 h-[100vh]" data-scroll-section>
      <Swiper
        autoplay={{
          delay: 7000,
        }}
        grabCursor={false}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            // shadow: true,
            translate: [-500, -100, 1500],
          },
          next: {
            // shadow: true,
            translate: [500, 100, 1500],
          },
        }}
        modules={[EffectCreative, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bgWrap">
            <Image
              alt="lambo"
              src={lambo1}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex flex-col h-full w-full bg-black/50">
            <motion.div
              initial={{ y: -400 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-start items-center mt-[90%] md:mt-[20%] lg:mt-[20%] xl:mt-[15%] font-quantico"
            >
              <h1 className="headings text-yellow-600">INTRODUCING</h1>
              <div className="grid">
                <h3 className="headings text-yellow-600">SPEED</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex justify-center items-center text-center mt-4 md:mt-8"
            >
              {/* <CarListButton href="/car" /> */}
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Banner;
