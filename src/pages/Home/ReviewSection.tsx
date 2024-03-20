import Container from "@/components/Container/Container";
import person1 from "@/assets/images/person1.png";
import person2 from "@/assets/images/person2.png";
import person3 from "@/assets/images/person3.png";

const ReviewSection = () => {
  return (
    <div
      className=" max-w-[1440px] mx-auto mt-[73px] md:mx-[40px] lg:mx-[80px]"
      style={{
        background:
          "radial-gradient(399.11% 87.34% at 3.92% 10.69%, #6A0DE0 0%, #1E0044 100%)",
        backgroundSize: "100% 100%",
      }}
    >
      <Container className="p-[80px]">
        <div>
          <h1 className="lg:text-[64px] lg:font-extrabold md:text-[24px] text-[#FFFFFF] mb-[83px]">
            What everyone says
          </h1>
        </div>
        <div className="lg:flex lg:gap-[24px] grid md:grid-cols-2  gap-3">
          <div
            className=" p-[32px] rounded-sm text-white"
            style={{ background: " rgba(161, 181, 204, 0.3)" }}
          >
            <p className="mb-[16px]">
              Lacus vestibulum ultricies mi risus, duis non, volutpat nullam
              non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
              Vitae quis cras vitae praesent morbi adipiscing purus consectetur
              mi.
            </p>
            <div className="flex gap-[16px]">
              <img src={person1} alt="" />
              <span className="">
                <p>Hellen Jummy</p>
                <p>Financial Counselor</p>
              </span>
            </div>
          </div>
          <div
            className=" p-[32px] rounded-sm text-white"
            style={{ background: " rgba(161, 181, 204, 0.3)" }}
          >
            <p className="mb-[16px]">
              Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut
              id. In tortor turpis viverra sagittis ultrices nisi, nec tortor.
              Vestibulum, ultrices ultricies neque, hac ultricies dolor.
            </p>
            <div className="flex gap-[16px]">
              <img src={person2} alt="" />
              <span className="">
                <p>Ralph Edwards</p>
                <p>Math Teacher</p>
              </span>
            </div>
          </div>
          <div
            className="p-[32px] rounded-sm text-white"
            style={{ background: " rgba(161, 181, 204, 0.3)" }}
          >
            <p className="mb-[16px]">
              Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et
              cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat
              tellus, congue malesuada sit nisl donec a.
            </p>
            <div className="flex gap-[16px]">
              <img src={person3} alt="" />
              <span className="">
                <p>Hellena John</p>
                <p>Psychology Student</p>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewSection;
