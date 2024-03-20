import { getEventManagementData } from "@/components/network/lib/events";
import { useQuery } from "@tanstack/react-query";

const useEventManagement = () => {
  const eventData = useQuery({
    queryKey: ["event-management"],
    queryFn: getEventManagementData,
  });
  return eventData;
};
export default useEventManagement;
