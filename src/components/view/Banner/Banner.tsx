
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "./banner.css";
import visaServices from "@/data/VisaTypes";
import Link from "next/link";
import PrimaryButton from "@/utils/PrimaryButton";

const Banner = () => {
  return (
    <motion.div className=" h-[100vh]">
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        grabCursor={false}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [-0, -0, 2500],
          },
          next: {
            shadow: true,
            translate: [0, 0, 2500],
          },
        }}
        modules={[EffectCreative, Autoplay, Navigation]}
        className="mySwiper"
      >
        {visaServices.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="bgWrap">
              <Image
                alt="lambo"
                src={service.image}
                placeholder="blur"
                blurDataURL={service.image}
                quality={100}
                fill
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col h-full w-full bg-black/60 pt-[5%]">
              <motion.div
                initial={{ y: -400 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col justify-start items-center mt-[70%] md:mt-[35%] lg:mt-[30%] xl:mt-[15%] font-quantico text-center space-y-2 md:space-y-4"
              >
                <h1 className="headings text-yellow-600">{service.heading}</h1>
                <div className="grid">
                  <h3 className="sub-heading text-yellow-600">
                    {service.subheading}
                  </h3>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="flex justify-center items-center text-center mt-4 md:mt-"
              >
                <Link href={service.action.link}>
                  <PrimaryButton type={"submit"}>{service.action.label}</PrimaryButton>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Banner;
