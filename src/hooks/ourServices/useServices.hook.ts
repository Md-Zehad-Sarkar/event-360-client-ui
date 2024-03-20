import { getServices } from "@/components/network/lib/services";
import { useQuery } from "@tanstack/react-query";

//custom hook for our service section
const useServices = () => {
  const servicesData = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  return servicesData;
};
export default useServices;
