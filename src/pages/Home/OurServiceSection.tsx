import Container from "@/components/Container/Container";
import useServices from "@/hooks/ourServices/useServices.hook";
import Cards from "@/components/Cards";
import WeddingEventCard from "@/components/WeddingEventCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Service {
  _id: string;
  description?: string;
  imageUrl: string; 
  eventName: string; 
  eventItems: string[];
}


const OurServiceSection = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ duration: 1500 });
  }, []);

  const { data: services, isLoading } = useServices();
  //filter data for corporate event
  const corporateEventData = services?.data.filter(
    (data: { eventType: string }) => data.eventType === "corporate"
  );

  //filter data for organization event
  const organizationEventData = services?.data.filter(
    (data: { eventType: string }) => data.eventType === "organization"
  );

  //filter data for wedding event
  const weddingEventData = services?.data.filter(
    (data: { eventType: string }) => data.eventType === "wedding"
  );

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <Container className="max-w-[1440px] mx-auto mt-[73px] md:mx-[40px] lg:mx-[80px]">
      <div className="text-center mb-[54px]">
        <h1 className="text-[24px] lg:text-[64px] md:font-extrabold mb-[12px]">
          Our Section
        </h1>
        <p className="mt-[12px] text-[12px] lg:text-[18px]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices <br /> faucibus neque velit risus ac id
          lorem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[10px] lg:gap-[20px] overflow-hidden">
        <div className="" data-aos="fade-right">
          {corporateEventData?.map((service :Service) => (
            <Cards service={service} key={service?._id}></Cards>
          ))}
        </div>
        <div className="" data-aos="fade-up">
          {organizationEventData?.map((service:Service) => (
            <Cards service={service} key={service?._id}></Cards>
          ))}
        </div>
        <div className="" data-aos="fade-left">
          {weddingEventData?.map((service:Service) => (
            <WeddingEventCard
              service={service}
              key={service?._id}
            ></WeddingEventCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurServiceSection;
