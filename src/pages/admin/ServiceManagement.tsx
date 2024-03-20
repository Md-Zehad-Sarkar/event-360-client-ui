import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useServiceManagement from "@/hooks/ourServices/useServiceManagement.hook";
import ServiceDataTable from "./ServiceDataTable";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/components/network/axios.interceptor";

interface IService {
  id?: string;
  _id?: string;
  name: string;
  status?: boolean;
}

const ServiceManagement = () => {
  // instant data updating
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await axiosClient.delete(`/delete-service/${id}`);
    },
    //use for instant data updating on ui
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["service-management"] });
    },
  });

  //handle approved
  const { mutateAsync: approvedAsync } = useMutation<
    void,
    Error,
    { id: string; data: { status: boolean } }
  >({
    mutationFn: async (data) => {
      await axiosClient.put(`/admin/approve-service/${data?.id}`, data?.data);
    },

    //use for instant data updating on ui
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["service-management"] });
    },
  });

  // get service data
  const { data: serviceData } = useServiceManagement();

  // delete service handler
  const handleDeleteService = async (id: string) => {
    await mutateAsync(id);
  };

  //handle approved service
  const handleApproved = (service: IService) => {
    if (service._id) {
      const options = { id: service._id, data: { status: !service.status } };
      approvedAsync(options);
    }
  };

  return (
    <div className="mt-10">
      <h1 className="mb-6 text-xl font-medium lg:font-semibold lg:text-4xl">
        Service Management
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg font-semibold">
              Service Name
            </TableHead>
            <TableHead className="text-lg font-semibold ">Status</TableHead>
            <TableHead className="text-lg font-semibold ">Update</TableHead>
            <TableHead className="text-lg font-semibold ">Approve</TableHead>
            <TableHead className="text-lg font-semibold ">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {serviceData?.map((service: IService) => (
            <ServiceDataTable
              key={service?._id}
              service={service}
              handleDeleteService={handleDeleteService}
              handleApproved={handleApproved}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServiceManagement;
