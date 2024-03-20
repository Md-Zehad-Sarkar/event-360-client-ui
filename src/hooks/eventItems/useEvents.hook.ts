import { getEventItems } from "@/components/network/lib/events";
import { useQuery } from "@tanstack/react-query";

const useEvents = () => {
  const eventData = useQuery({
    queryKey: ["events"],
    queryFn: getEventItems,
  });
  return eventData;
};

export default useEvents;
