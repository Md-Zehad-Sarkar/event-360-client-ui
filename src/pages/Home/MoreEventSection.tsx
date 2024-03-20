import Container from "@/components/Container/Container";
import event_1 from "@/assets/images/moreevent1.jpg";
import event_2 from "@/assets/images/moreevent2.jpg";
import event_3 from "@/assets/images/moreevent3.jpg";
import event_4 from "@/assets/images/moreevent4.jpg";
import event_5 from "@/assets/images/moreevent5.jpg";
import event_6 from "@/assets/images/moreevent6.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MoreEventSection = () => {
  useEffect(() => {
    // initialize when the component mount
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Container className=" max-w-[1440px] mx-auto mb-20 md:mx-[40px] lg:mx-[80px] overflow-hidden">
      <div className="mb-20 text-center">
        <h1 className="lg:font-extrabold lg:text-[64px] text-[36px] font-bold">
          Whatever you organize, we've <br /> got you covered
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-2 md:gap-3 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="flex flex-col items-center justify-center bg-[#6E8CF9] bg-opacity-20 p-[24px] rounded-[6px]"
          data-aos="fade-right"
        >
          <img src={event_1} alt="" className="mb-3 rounded-sm" />
          <p>Events</p>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-[#F96EC2] bg-opacity-20 p-[24px] rounded-[6px]"
          data-aos="fade-up"
        >
          <img src={event_2} alt="" className="mb-3 rounded-sm" />
          <p>Conferences</p>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-[#F9B16E] bg-opacity-20 p-[24px] rounded-[6px]"
          data-aos="fade-left"
        >
          <img src={event_3} alt="" className="mb-3 rounded-sm" />
          <p>Seminars</p>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-[#D9D9D9] bg-opacity-100 p-[24px] rounded-[6px]"
          data-aos="fade-right"
        >
          <img src={event_4} alt="" className="mb-3 rounded-sm" />
          <p>Workshop</p>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-[#81F96E] bg-opacity-20 p-[24px] rounded-[6px]"
          data-aos="fade-up"
        >
          <img src={event_5} alt="" className="mb-3 rounded-sm" />
          <p>Festival</p>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-[#F41D84] bg-opacity-20 p-[24px] rounded-[6px]"
          data-aos="fade-left"
        >
          <img src={event_6} alt="" className="mb-3 rounded-sm" />
          <p>Theater</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Link
          to="/"
          className="bg-[#5A01CB] hover:bg-black text-white text-center  w-[360px] p-2 rounded-md"
        >
          Get Started
        </Link>
      </div>
    </Container>
  );
};

export default MoreEventSection;
