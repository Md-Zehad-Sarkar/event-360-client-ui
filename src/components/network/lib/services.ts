import axiosClient from "../axios.interceptor";

export const getServices = async () => {
  const data = await axiosClient.get("/services");
  return data;
};

//admin service management data get
export const getServiceManagement = async () => {
  const data = await axiosClient.get("/admin-service-management");
  return data?.data;
};
