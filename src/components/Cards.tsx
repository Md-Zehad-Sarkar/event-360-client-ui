import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";
interface Service {
  imageUrl: string;
  eventName: string;
  eventItems: string[];
}

interface CardsProps {
  service: Service | null;
}

const Cards: React.FC<CardsProps> = ({ service }) => {
  return (
    <Card className="bg-[#5A01CB] bg-opacity-5">
      <img src={service?.imageUrl} alt="" className="mx-auto md:pt-[25px] w-full" />
      <CardHeader>
        <CardTitle>
          <h1 className="mb-[12px] font-extrabold text-[32px]">
            {service?.eventName}
          </h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {service?.eventItems?.map((item, i) => (
          <div className="flex items-center gap-[18px]" key={i}>
            <span className="">
              <Check className="text-[#6FCF97]  border  w-[24px] h-[24px] bg-[#FFFFFF] rounded-full " />
            </span>
            <p className="py-[12px]"> {item}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Cards;
