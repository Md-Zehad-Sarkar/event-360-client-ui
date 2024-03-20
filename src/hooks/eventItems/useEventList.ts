import { getEventList } from "@/components/network/lib/events";
import { useQuery } from "@tanstack/react-query";

const useEventsList = () => {
  const eventListData = useQuery({
    queryKey: ["events-list"],
    queryFn: getEventList,
  });
  return eventListData;
};

export default useEventsList;
