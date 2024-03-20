import { TableCell, TableRow } from "@/components/ui/table";
import { CheckSquare, Edit, Trash, XSquare } from "lucide-react";

import { Link } from "react-router-dom";

export interface IEvent {
  _id?: string;
  name: string;
  status?: string;
}

interface IEventDataTableProps {
  event: IEvent;
  handleEventDelete: (id: string) => Promise<void>;
  handleApproved: (event: IEvent) => void;
}
const EventDataTable: React.FC<IEventDataTableProps> = ({
  event,
  handleEventDelete,
  handleApproved,
}) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{event?.name}</TableCell>
      <TableCell>
        {event?.status ? (
          <p className="text-green-500">done</p>
        ) : (
          <p className="text-red-500">pending</p>
        )}
      </TableCell>
      <TableCell className="">
        <Link to="/admin/update-event" state={event}>
          <Edit className="transition-all ease-in-out rounded-md hover:bg-indigo-500 hover:text-white"></Edit>
        </Link>
      </TableCell>
      <TableCell onClick={() => handleApproved(event)}>
        {event?.status ? (
          <XSquare className="transition-all ease-in-out rounded-md hover:bg-indigo-500 hover:text-white" />
        ) : (
          <CheckSquare className="transition-all ease-in-out rounded-md hover:bg-indigo-500 hover:text-white"></CheckSquare>
        )}
      </TableCell>
      <TableCell onClick={() => handleEventDelete(event?._id ?? "")}>
        <Trash className="transition-all ease-in-out rounded-md hover:bg-red-500 hover:text-white"></Trash>
      </TableCell>
    </TableRow>
  );
};

export default EventDataTable;
