import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useEventManagement from "@/hooks/eventItems/useEventManagement.hook";
import EventDataTable from "./EventDataTable";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/components/network/axios.interceptor";

interface IEvent {
  id?: string;
  _id?: string;
  name: string;
  status?: string;
}

const EventManagement = () => {
  const queryClient = useQueryClient(); //use for instant data updating on ui
  // use for delete
  const { mutateAsync } = useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await axiosClient.delete(`/delete-event/${id}`);
    },
    //use for instant data updating on ui
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event-management"] });
    },
  });

  //handle approved
  const { mutateAsync: approvedAsync } = useMutation<
    void,
    Error,
    { id: string; data: { status: boolean } }
  >({
    mutationFn: async (data) => {
      await axiosClient.put(`/admin/approve-event/${data?.id}`, data?.data);
    },

    //use for instant data updating on ui
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event-management"] });
    },
  });

  const { data: eventData, isLoading } = useEventManagement();

  if (isLoading) {
    return <p>loading...</p>;
  }

  //delete event item
  const handleEventDelete = async (id: string) => {
    await mutateAsync(id);
  };

  //handle approved
  const handleApproved = (event: IEvent) => {
    if (event._id) {
      const options = { id: event._id, data: { status: !event.status } };
      approvedAsync(options);
    }
  };

  return (
    <div className="">
      <h1 className="mb-6 text-4xl font-semibold">Event Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg font-semibold">Event Name</TableHead>
            <TableHead className="text-lg font-semibold ">Status</TableHead>
            <TableHead className="text-lg font-semibold ">Update</TableHead>
            <TableHead className="text-lg font-semibold ">Approve</TableHead>
            <TableHead className="text-lg font-semibold ">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventData?.data?.map((event: IEvent) => (
            <EventDataTable
              key={event?._id}
              event={event}
              handleEventDelete={handleEventDelete}
              handleApproved={handleApproved}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EventManagement;
