import Container from "@/components/Container/Container";
import purple from "@/assets/images/Purple.png";
import blue from "@/assets/images/Blue.png";
import useEvents from "@/hooks/eventItems/useEvents.hook";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const EventItemSection = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ duration: 1500 });
  }, []);

  //get events using useEvent hooks
  const { data: events, isLoading, isError } = useEvents();

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    throw new Error("failed to load data");
  }

  return (
    <Container className="max-w-[1440px] mt-[143px] mx-auto md:mx-[40px] lg:mx-[80px]  relative">
      <img
        src={purple}
        alt=""
        className="absolute   lg:w-[301px] lg:h-[501px] -top-[128px] -left-[0px] rotate-[45de] bg-[#5FD479] bg-opacity-[25%] opacity-2 blur-lg rounded-[260px] mx-auto"
      />
      <div className="text-center mb-[54px]">
        <h2 className="text-[24px] lg:text-[64px] md:font-extrabold mb-[12px]">
          Event Items
        </h2>
        <p className="mt-[12px] text-[12px] lg:text-[18px] text-wrap md:text-nowrap">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices
          <br />
          faucibus neque velit risus ac id lorem.
        </p>
      </div>

      <div className="md:grid lg:grid-cols-12 md:gap-[20px] rounded-[6px] overflow-hidden grid grid-cols-1 md:grid-cols-12">
        <div
          className="md:col-span-6 lg:col-span-6 bg-[#6E8CF9] bg-opacity-20 lg:p-[24px] rounded-[6px] p-4"
          data-aos="fade-right"
        >
          <img
            src={events?.data[0]?.imageUrl}
            alt=""
            className="mx-auto rounded-[6px]"
          />
          <h5 className="text-[24px] font-medium mt-[12px]">Event Item-1</h5>
        </div>
        <div
          className="md:col-span-6 lg:col-span-6 bg-[#F96EC2] bg-opacity-20  lg:p-[24px] rounded-[8px]p-4"
          data-aos="fade-left"
        >
          <img
            src={events?.data[1]?.imageUrl}
            alt=""
            className="mx-auto rounded-[6px]"
          />
          <h5 className="text-[24px] font-medium mt-[12px] ml-4 lg:mt-20 lg:ml-10">
            Event Item-2
          </h5>
        </div>
        <div
          className="md:col-span-6 lg:col-span-4 bg-[#F9B16E] bg-opacity-20 p-4 lg:p-[24px] rounded-[6px]"
          data-aos="fade-right"
        >
          <img
            src={events?.data[2]?.imageUrl}
            alt=""
            className="mx-auto rounded-[6px]"
          />
          <h5 className="text-[24px] font-medium mt-[12px]">Event Item-3</h5>
        </div>
        <div
          className="md:col-span-6 lg:col-span-4 bg-[#D9D9D9] bg-opacity-100 p-4 lg:p-[24px] rounded-[6px]"
          data-aos="fade-up"
        >
          <img
            src={events?.data[3]?.imageUrl}
            alt=""
            className="mx-auto rounded-[6px]"
          />
          <h5 className="text-[24px] font-medium mt-[12px]">Event Item-4</h5>
        </div>
        <div
          className="md:col-span-6 lg:col-span-4 bg-[#81F96E] bg-opacity-20 p-4 lg:p-[24px] rounded-[6px]"
          data-aos="fade-left"
        >
          <img
            src={events?.data[4]?.imageUrl}
            alt=""
            className="mx-auto rounded-[6px]"
          />
          <h5 className="text-[24px] font-medium mt-[12px]">Event Item-5</h5>
        </div>
      </div>
      <img
        src={blue}
        alt=""
        className="absolute   lg:w-[400px] lg:h-[690px] -bottom-[440px]  lg:-right-[0px]  bg-[#F41D84] bg-opacity-[35%]  blur-lg rounded-[250px] mx-auto"
      />
    </Container>
  );
};

export default EventItemSection;
