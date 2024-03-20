import EventHistory from "./EventHistory";
import EventItemSection from "./EventItemSection";
import GallerySection from "./GallerySection";
import GetStartedSection from "./GetStartedSection";
import HeaderSection from "./HeaderSection";
import MoreEventSection from "./MoreEventSection";
import OurServiceSection from "./OurServiceSection";
import RecentEventSection from "./RecentEventSection";
import ReviewSection from "./ReviewSection";

const Home = () => {
  return (
    <div className="">
      <HeaderSection />
       <OurServiceSection />
      <EventItemSection />
      <GallerySection />
      <GetStartedSection />
      <ReviewSection />
      <RecentEventSection />
      <EventHistory />
      <MoreEventSection />
    </div>
  );
};

export default Home;
