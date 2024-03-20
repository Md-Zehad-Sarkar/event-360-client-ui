import Container from "@/components/Container/Container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEventsList from "@/hooks/eventItems/useEventList";

interface Items {
  imageUrl: string;
  title: string;
  creator: string;
}

const RecentEventSection = () => {
  const { data: eventLists, isLoading, isError } = useEventsList();

  //loading handling
  if (isLoading) {
    return <p>loading...</p>;
  }
  //error handling
  if (isError) {
    throw new Error("failed to load data");
  }
  return (
    <Container className="w-full max-w-[1280px] mx-auto pt-[80px]">
      <div className="text-center">
        <h1 className="text-[64px] font-extrabold">Recent Events</h1>
        <p>
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit <br /> risus ac id
          lorem.
        </p>
      </div>
      <Carousel className="m-12">
        <CarouselContent className="flex">
          {eventLists?.data?.map((item: Items, index: string) => (
            <CarouselItem
              key={index}
              className="flex-none w-full sm:w-1/2 md:w-1/4"
            >
              <Card className="bg-[#DEDEDE]">
                <CardContent className="flex items-center justify-center p-0 aspect-square">
                  <div>
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="max-w-full max-h-full mb-1 rounded-t-sm"
                    />
                    <span>
                      <p>{item?.title}</p>
                      <p>
                        <span>by</span> {item?.creator}
                      </p>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default RecentEventSection;
