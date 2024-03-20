import { TableCell, TableRow } from "@/components/ui/table";
import { CheckSquare, Edit, Trash, XSquare } from "lucide-react";
import { Link } from "react-router-dom";
interface TService {
  id?: string;
  _id?: string;
  name: string;
  status?: boolean;
}

interface IServiceDataTableProps {
  service: TService;
  handleDeleteService: (id: string) => Promise<void>;
  handleApproved: (service: TService) => void;
}

const ServiceDataTable: React.FC<IServiceDataTableProps> = ({
  service,
  handleDeleteService,
  handleApproved,
}) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{service?.name}</TableCell>
      <TableCell>
        {service?.status ? (
          <p className="text-green-500">done</p>
        ) : (
          <p className="text-red-500">pending</p>
        )}
      </TableCell>
      <TableCell className="">
        <Link to="/admin/update-service" state={service}>
          <Edit className="transition-all ease-in-out rounded-md hover:bg-indigo-500 hover:text-white"></Edit>
        </Link>
      </TableCell>
      <TableCell onClick={() => handleApproved(service)} className="">
        {service?.status ? (
          <XSquare className="transition-all ease-in-out rounded-md hover:bg-indigo-500 hover:text-white" />
        ) : (
          <CheckSquare className="transition-all ease-in-out rounded-md hover:bg-indigo-500 hover:text-white"></CheckSquare>
        )}
      </TableCell>
      <TableCell onClick={() => handleDeleteService(service?._id as string)}>
        <Trash className="transition-all ease-in-out rounded-md hover:bg-red-500 hover:text-white"></Trash>
      </TableCell>
    </TableRow>
  );
};

export default ServiceDataTable;
