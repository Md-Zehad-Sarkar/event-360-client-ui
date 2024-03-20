import axiosClient from "@/components/network/axios.interceptor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { PlusCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

interface IFormData {
  id?: string;
  name: string;
  imageUrl: string;
}

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const api_url = "https://api.imgbb.com/1/upload";

const UpdateService = () => {
  const { handleSubmit, register } = useForm<IFormData>();
  const location = useLocation();
  const navigate = useNavigate();

  const [item, setItem] = useState<string[]>([]);
  const [inputItem, setInputItem] = useState("");

  const { _id, name } = location.state;

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation<void, Error, Partial<IFormData>>({
    mutationFn: async (serviceData) => {
      return await axiosClient.patch(
        `/admin/update-service/${serviceData?.id}`,
        serviceData
      );
    },

    //use for instant data updating on ui
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["service-management"] });
    },
  });

  const handleAddServiceItem = (e: FormEvent) => {
    e.preventDefault();
    setItem((prevItem) => [...prevItem, inputItem]);
  };

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
    const serviceData = {
      id: _id,
      name: data?.name,
      imageUrl: hostImageUrl,
      status: false,
      items: item,
      date: new Date().toLocaleDateString(),
    };

    await mutateAsync(serviceData);
    navigate("/admin");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
      <div className="mb-4">
        <label htmlFor="title">Service Title</label>
        <Input type="text" {...register("name")} defaultValue={name} />
      </div>
      <div className="mb-4">
        <label htmlFor="imageUrl">Image Url</label>
        <Input type="file" {...register("imageUrl")} />
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <label htmlFor="items">Services Items</label>
          <Input onChange={(e) => setInputItem(e.target.value)} type="text" />
        </div>
        <div>
          <button
            onClick={handleAddServiceItem}
            className="flex gap-2 p-1 border rounded-md"
          >
            <PlusCircle /> <span>service Items</span>
          </button>
        </div>
      </div>

      <Button type="submit" className="text-xl">
        Update
      </Button>
    </form>
  );
};

export default UpdateService;
