import axiosClient from "@/components/network/axios.interceptor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
interface FormData {
  name: string;
  imageUrl: string;
  status: boolean;
  date: string;
}

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const api_url = "https://api.imgbb.com/1/upload";

const AddEvent = () => {
  const { handleSubmit, register } = useForm<FormData>();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation<void, Error, FormData, unknown>({
    mutationFn: async (eventData) => {
      return await axiosClient.post("add-event", eventData);
    },
  });

  const onSubmit = async (data: FormData) => {
    //.............................img upload.......................

    //image hosting
    const formData = new FormData();
    formData.append("image", data.imageUrl[0]);

    //first hosting and get url
    const response = await axios.post(api_url, formData, {
      params: { key: image_hosting_api },
    });

    // extract image url from response
    const imageUrl = response.data?.data?.display_url;
    //...................................

    const eventData = {
      name: data?.name,
      imageUrl: imageUrl,
      status: false,
      date: new Date().toLocaleDateString(),
    };
    await mutateAsync(eventData);
    navigate("/admin");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
      <div className="mb-4">
        <label htmlFor="name">Event Title</label>
        <Input type="text" {...register("name")} />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Image Url</label>
        <Input type="file" {...register("imageUrl")} />
      </div>
      <Button type="submit" className="text-xl">
        Submit
      </Button>
    </form>
  );
};

export default AddEvent;
