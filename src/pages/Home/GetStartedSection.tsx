import Container from "@/components/Container/Container";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { easeInOut, motion } from "framer-motion";

const GetStartedSection = () => {
  return (
    <div
      className="mt-[160px] max-w-[1440px] mx-auto lg:mx-[80px] md:mx-[40px]"
      style={{
        background:
          "linear-gradient(105deg, #CEEDFF 16.17%, rgba(255, 255, 255, 0.00) 87.53%)",
        paddingTop: "100px",
        paddingBottom: "40px",
      }}
    >
      <Container className="mb-[130px]">
        <div className="text-center mb-[118px]">
          <h1 className="font-semibold text-[45px]">Ready to get started?</h1>
          <p className="text-[12px] md:text-[18px]">
            14 days unlimited free trial. No contract or credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[35px] justify-items-center gap-3 md:gap-6">
          {/* card 1 */}
          <motion.div
            className="w-[270px] h-[486px] md:w-[300px] md:h-[500px]  lg:w-[370px] lg:h-[586px] px-[10px] md:px-[25px]  lg:px-[51px] pt-[44px] pb-4 md:pb-[25px] rounded-md bg-white"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.6, ease: easeInOut },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.6, ease: easeInOut },
            }}
          >
            <div className="mb-[47px] ">
              <h5 className="mb-[6px] ">Starter Plan</h5>
              <p className="text-[51px] font-bold">
                $11
                <span className="text-[15px] font-semibold ml-[7px]">
                  /month
                </span>
              </p>
            </div>

            <div className="space-y-[10px] md:space-y-[16px] lg:space-y-[22px]">
              <p className="flex gap-[16px]">
                <Check className="text-[#5A01CB]" />
                <span className="text-[15px] font-semibold">
                  20,000 Visitors
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#5A01CB]" />
                <span className="text-[15px] font-semibold">
                  Create Unlimited Widgets
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#5A01CB]" />
                <span className="text-[15px] font-semibold">
                  CMS Integration
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#5A01CB]" />
                <span className="text-[15px] font-semibold">
                  All Widget Types
                </span>
              </p>
            </div>
            <Button className="bg-[#5A01CB] mt-20 md:mt-[132px] lg:mt-[138px] w-full">
              Get this package
            </Button>
          </motion.div>

          {/* card 2 */}
          <motion.div
            className="w-[270px] h-[486px] md:w-[300px] md:h-[500px]  lg:w-[370px] lg:h-[586px]  px-[10px] md:px-[25px]  lg:px-[51px] pt-[44px] pb-4 md:pb-[25px] rounded-md bg-white"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.6, ease: easeInOut },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.6, ease: easeInOut },
            }}
          >
            <div className="mb-[47px]">
              <h5 className="mb-[6px] ">Starter Plan</h5>
              <p className="text-[51px] font-bold">
                $36
                <span className="text-[15px] font-semibold ml-[7px]">
                  /month
                </span>
              </p>
            </div>

            <div className="space-y-[10px] md:space-y-[16px] lg:space-y-[22px]">
              <p className="flex gap-[16px]">
                <Check className="text-[#5A01CB]" />
                <span className="text-[15px] font-semibold">
                  50,000 Visitors
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#5A01CB]" />
                <span className="text-[15px] font-semibold">
                  Create Unlimited Widgets
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#5A01CB]" />
                <span className="text-[15px] font-semibold">
                  CMS Integration
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#5A01CB]" />
                <span className="text-[15px] font-semibold">
                  All Widget Types
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#5A01CB]" />
                <span className="text-[15px] font-semibold">Integration</span>
              </p>
            </div>
            <Button className="bg-[#5A01CB] mt-14 md:mt-[88px] lg:mt-[92px] w-full">
              Get this package
            </Button>
          </motion.div>

          {/* card 3 */}
          <motion.div
            className="w-[270px] h-[486px] md:w-[300px] md:h-[500px] lg:w-[370px] lg:h-[586px] bg-[#5A01CB]  px-[10px] md:px-[25px]  lg:px-[51px] pt-[44px] pb-4 md:pb-[25px] text-[#F3F3F3] rounded-md"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.6, ease: easeInOut },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.6, ease: easeInOut },
            }}
          >
            <div className="mb-[47px]">
              <h5 className="mb-[6px] ">Starter Plan</h5>
              <p className="text-[51px] font-bold">
                $11
                <span className="text-[15px] font-semibold ml-[7px]">
                  /month
                </span>
              </p>
            </div>

            <div className="space-y-[10px] md:space-y-[16px] lg:space-y-[22px]">
              <p className="flex gap-[16px]">
                <Check className="text-[#F3F3F3]" />
                <span className="text-[15px] font-semibold">
                  20,000 Visitors
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#F3F3F3]" />
                <span className="text-[15px] font-semibold">
                  Create Unlimited Widgets
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#F3F3F3]" />
                <span className="text-[15px] font-semibold">
                  CMS Integration
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#F3F3F3]" />
                <span className="text-[15px] font-semibold">
                  All Widget Types
                </span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#F3F3F3]" />
                <span className="text-[15px] font-semibold">Integration</span>
              </p>
              <p className="flex gap-[16px]">
                <Check className="text-[#F3F3F3]" />
                <span className="text-[15px] font-semibold">
                  Dedicated Manager
                </span>
              </p>
            </div>
            <Button className="bg-[#F3F3F3] mt-4 md:mt-[44px] lg:mt-[48px] text-[#5A01CB] w-full hover:text-white">
              Get this package
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default GetStartedSection;
