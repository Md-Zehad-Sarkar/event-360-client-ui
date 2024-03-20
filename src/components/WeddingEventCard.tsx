import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface Service {
  _id: string;
  imageUrl: string;
  eventName: string;
  eventItems: string[];
  description?: string;
}

interface CardsProps {
  service: Service | null;
}

const WeddingEventCard: React.FC<CardsProps> = ({ service }) => {
  return (
    <Card className="bg-[#5A01CB] bg-opacity-20">
      <CardHeader>
        <CardTitle>
          <h1 className="mb-[8px] font-extrabold text-[32px] mt-[20px]">
            {service?.eventName}
          </h1>
        </CardTitle>
        <CardDescription>
          <p className="mb-[26px] leading-7"> {service?.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {service?.eventItems?.map((item, i) => (
          <p className="flex items-center gap-[18px]" key={i}>
            <span className="">
              <Check className="text-[#6FCF97]  border  w-[24px] h-[24px] bg-[#FFFFFF] rounded-full " />
            </span>
            <p className="py-[12px]"> {item}</p>
          </p>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#5A01CB] text-white">Check it out</Button>
      </CardFooter>
    </Card>
  );
};

export default WeddingEventCard;
