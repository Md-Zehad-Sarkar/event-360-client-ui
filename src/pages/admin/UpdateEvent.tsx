import axiosClient from "@/components/network/axios.interceptor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

interface IFormData {
  id?: string;
  _id?: string;
  name: string;
  imageUrl: string;
  status: boolean;
  date?: string;
}

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const api_url = "https://api.imgbb.com/1/upload";

const UpdateEvent = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation<void, Error, IFormData>({
    mutationFn: async (data) => {
      await axiosClient.put(`/admin/update-event/${data?.id as string}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event-management"] });
    },
  });

  const { handleSubmit, register } = useForm<IFormData>();

  const location = useLocation();
  const { name, _id } = location.state;

  const onSubmit = async (data: IFormData) => {
    //.............................img upload.......................
    //image hosting
    const formData = new FormData();
    formData.append("image", data.imageUrl[0]);

    // image hosting and get url
    const response = await axios.post(api_url, formData, {
      params: { key: image_hosting_api },
    });

    // extract image url from response
    const hostImageUrl = response.data?.data?.display_url;
    //...................................

    const updateEventData: IFormData = {
      id: _id,
      name: data?.name,
      imageUrl: hostImageUrl,
      status: false,
      date: new Date().toLocaleDateString(),
    };

    await mutateAsync(updateEventData);
    navigate("/admin");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
      <div className="mb-4">
        <label htmlFor="name">Event Title</label>
        <Input type="text" {...register("name")} defaultValue={name} />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Image Url</label>
        <Input type="file" {...register("imageUrl")} />
      </div>
      <Button type="submit" className="text-xl">
        Update
      </Button>
    </form>
  );
};

export default UpdateEvent;
