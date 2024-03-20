import { getServiceManagement } from "@/components/network/lib/services";
import { useQuery } from "@tanstack/react-query";

const useServiceManagement = () => {
  const serviceData = useQuery({
    queryKey: ["service-management"],
    queryFn: getServiceManagement,
  });
  return serviceData;
};
export default useServiceManagement;
