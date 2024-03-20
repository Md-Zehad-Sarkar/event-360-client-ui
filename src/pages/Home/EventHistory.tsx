import Container from "@/components/Container/Container";

const EventHistory = () => {
  return (
    <Container className="max-w-[1440px] mx-auto mt-24 mb-24 md:mx-[40px] lg:mx-[80]">
      <div className="text-center">
        <h1 className="md:font-extrabold lg:text-[64px] text-[36px]">Our Event History</h1>
        <p>
          The historical event took place in a small town, marking <br /> a
          significant turning point.
        </p>
      </div>
      <div className="grid items-center justify-center gap-2 mt-20 md:gap-8 md:flex">
        <div className="w-[240px] h-[180px] bg-[#5A01CB] bg-opacity-5 rounded-sm text-center flex flex-col items-center justify-center px-5">
          <p className="py-3 font-extrabold text-7xl">
            800
            <span className="pt-6 font-extrabold text-purple-800 text-7xl">
              +
            </span>
          </p>
          <h5 className="text-xl font-semibold">Corporate Events</h5>
        </div>
        <div className="w-[240px] h-[180px] bg-[#5A01CB] bg-opacity-5  rounded-sm text-center flex flex-col items-center justify-center">
          <p className="py-3 font-extrabold text-7xl">
            1.5K
            <span className="pt-6 font-extrabold text-purple-800 text-7xl">
              +
            </span>
          </p>
          <h5 className="text-xl font-semibold">Organization events</h5>
        </div>
        <div className="w-[240px] h-[180px] bg-[#5A01CB] bg-opacity-5 rounded-sm text-center flex flex-col items-center justify-center">
          <p className="py-3 font-extrabold text-7xl">
            1K
            <span className="font-semibold text-purple-800 text-7xl">+</span>
          </p>
          <h5 className="text-xl font-semibold">Wedding events</h5>
        </div>
      </div>
    </Container>
  );
};

export default EventHistory;
