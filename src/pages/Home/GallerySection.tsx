import Container from "@/components/Container/Container";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import sun1 from "@/assets/images/sun1.png";
import sun2 from "@/assets/images/sun2.png";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";
import image6 from "@/assets/images/image6.png";
import image7 from "@/assets/images/image7.png";
import image8 from "@/assets/images/image8.png";
import image9 from "@/assets/images/image9.png";
import image10 from "@/assets/images/image10.png";

const GallerySection = () => {
  return (
    <Container className="max-w-[1440px] mx-auto mt-[138px] md:mx-[40px] lg:mx-[80px] lg:grid lg:grid-cols-2 gap-[118px] ">
      <div className="space-y-[35px] mt-24 relative">
        {/* rotation animation on image */}
        <motion.img
          animate={{
            scale: [1, 1.3, 1.3, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 5,
            repeatDelay: 5,
          }}
          src={sun1}
          alt=""
          className="absolute block w-24 h-24 lg:-top-5 lg:-right-1 -top-16 right-32 md:right-1"
        />
        <h1 className="md:text-[64px] md:font-bold lg:font-extrabold lg:text-[64px]">
          Gallery
        </h1>
        <p className="w-[30ch] md:w-[40ch] max-w-[55ch] md:no-wrap text-left text-[12px] md:text-[18px] text-wrap">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in ultricies. Gravida id nibh ornare
          viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <div className="space-y-[16px]">
          <p className="flex items-center gap-2 lg:gap-[18px] text-[12px] md:text-[18px]">
            <span className="">
              <Check className="text-[#6FCF97]  border  w-[24px] h-[24px] bg-[#FFFFFF] rounded-full " />
            </span>
            One day pas access all lecture
          </p>
          <p className="flex items-center gap-2 lg:gap-[18px] text-[12px] md:text-[18px]">
            <span className="">
              <Check className="text-[#6FCF97] border w-[24px] h-[24px] bg-[#FFFFFF] rounded-full " />
            </span>
            Lunch and Snack
          </p>
          <p className="flex items-center gap-2 lg:gap-[18px] text-[12px] md:text-[18px]">
            <span className="">
              <Check className="text-[#6FCF97] border w-[24px] h-[24px] bg-[#FFFFFF] rounded-full" />
            </span>
            Meet Event Speaker
          </p>
          <p className="flex items-center gap-2 lg:gap-[18px] text-[12px] md:text-[18px]">
            <span className="">
              <Check className="text-[#6FCF97] border w-[24px] h-[24px] bg-[#FFFFFF] rounded-full " />
            </span>
            Front Seat
          </p>
          <p className="flex items-center gap-2 lg:gap-[18px] text-[12px] md:text-[18px]">
            <span className="">
              <Check className="text-[#6FCF97] border w-[24px] h-[24px] bg-[#FFFFFF] rounded-full " />
            </span>
            One day pas access all lecture
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="grid items-center grid-cols-1 lg:grid-cols-4 md:grid md:grid-cols-2">
          <div className="mt-[52px] ">
            <img src={image1} alt="" className="" />
            <img src={image2} alt="" className="" />
          </div>
          <div className="">
            <img src={image3} alt="" className="" />
            <img src={image4} alt="" className="" />
            <img src={image5} alt="" className="" />
          </div>
          <div className="">
            <img src={image6} alt="" className="" />
            <img src={image7} alt="" className="" />
            <img src={image8} alt="" className="" />
          </div>
          <div className="">
            <img src={image9} alt="" className="" />
            <img src={image10} alt="" className="" />
          </div>
        </div>
        <div className="absolute lg:-right-6 lg:-bottom-22 md:-right-4 md:-bottom-20 -bottom-28 sm:-right-2">
          <img src={sun2} alt="" className="w-28 h-28" />
        </div>
      </div>
    </Container>
  );
};

export default GallerySection;
