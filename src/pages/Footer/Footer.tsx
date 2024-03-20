const Footer = () => {
  return (
    <footer className=" text-[#E2E8F0] max-w-[1440px] md:mx-[40px]  mx-auto lg:mx-[80px] mt-28">
      <div className="text-white md:grow md:flex bg-[#111617] py-[48px]">
        <div className="">
          <h1 className="text-[#FFFFFF] text-sm md:text-[32px] md:w-[144px] md:h-[35px] font-medium md:font-bold lg:flex  mr-1 ml-1">
            Event
            <span
              style={{
                background:
                  "linear-gradient(216deg, #5A01CB 50.75%, #FE8900 85.4%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                marginLeft: "5px",
              }}
            >
              360
            </span>
          </h1>
        </div>
        {/* links */}
        <div className="w-full grow">
          <div className="gap-2 md:grid md:grid-cols-5">
            {/* link div 1 */}
            <div className="grid space-y-[12px]">
              <h4 className="text-[#FFFFFF]">Product</h4>
              <span className="flex flex-col">
                <a href="">Pricing</a>
                <a href="">Overview</a>
                <a href="">Browse</a>
                <a href="">Accessibility</a>
              </span>
            </div>
            <div className="grid space-y-[12px]">
              <h4 className="text-[#FFFFFF]">Solution</h4>
              <span className="flex flex-col">
                <a href="">Brainstorming</a>
                <a href="">Ideation</a>
                <a href="">Wireframing</a>
                <a href="">Research</a>
              </span>
            </div>
            <div className="grid space-y-[12px]">
              <h4 className="text-[#FFFFFF]">Resources</h4>
              <span className="flex flex-col">
                <a href="">Help Center</a>
                <a href="">Blog</a>
                <a href="">Tutorials</a>
                <a href="">FAQs</a>
              </span>
            </div>
            <div className="grid space-y-[12px]">
              <h4 className="text-[#FFFFFF]">Support</h4>
              <span className="flex flex-col">
                <a href="">Contact Us</a>
                <a href="">Developers</a>
                <a href="">Documentation</a>
                <a href="">Integrations</a>
              </span>
            </div>
            <div className="grid space-y-[12px]">
              <h4 className="text-[#FFFFFF]">Company</h4>
              <span className="flex flex-col">
                <a href="">About</a>
                <a href="">Press</a>
                <a href="">Events</a>
                <a href="" className="flex gap-[8px]  items-center">
                  Request Demo
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-[13px] w-[14px] text-[#E2E8F0] "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd footer and copyright  */}
      <div className="grid md:justify-between grid-cols-2 md:flex text-[16px] grow bg-[#111617] py-[36px]">
        <p className="text-[#E2E8F0]"> @ 2023. All rights reserved.</p>
        <ul className="grid md:gap-[32px] text-[#E2E8F0] grid-cols-2 md:flex md:justify-between">
          <span className="md:flex md:gap-[32px]">
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </span>
          <span className="md:flex md:gap-[32px] ">
            <li className="flex  items-center md:gap-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="md:w-[24px] md:h-[24px] w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span>EN</span>
            </li>
            <li className="flex  items-center md:gap-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="md:w-[24px] md:h-[24px] w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>EUR</span>
            </li>
            <li className="flex  items-center md:gap-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="md:w-[24px] md:h-[24px] w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </li>
          </span>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
