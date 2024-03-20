import Container from "@/components/Container/Container";
import musicMan from "@/assets/images/musicman.png";
import { useState } from "react";
import { motion } from "framer-motion";

//use for gradient animation when image load
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const HeaderSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <Container className=" max-w-[1440px] h-full mx-auto md:mx-[40px] lg:mx-[80px]">
      <div className="text-center">
        <h1 className="text-[#000000] lg:text-[64px] md:font-extrabold  uppercase text-[24px] text-wrap md:text-nowrap">
          Brand New event Packages
        </h1>
        <p
          className="text-[20px] lg:text-[56px] md:font-bold md:text-[36px] lg:font-extrabold mt-[8px]"
          style={{
            background:
              "linear-gradient(276deg, #9601CB 37.08%, #FE8900 57.18%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          For Winter
        </p>
        <p className="mt-[12px] text-[12px] lg:text-[18px]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. <br /> Ultrices faucibus neque velit risus ac id
          lorem.
        </p>
      </div>
      <motion.div
        className="mt-[42px]"
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img
          src={musicMan}
          alt=""
          className="mx-auto"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </Container>
  );
};

export default HeaderSection;
