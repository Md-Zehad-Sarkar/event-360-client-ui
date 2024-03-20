import axiosClient from "../axios.interceptor";

export const getEventItems = () => {
  const data = axiosClient.get("/events");
  return data;
};
export const getEventList = () => {
  const data = axiosClient.get("/events-list");
  return data;
};

export const getEventManagementData = () => {
  const data = axiosClient.get("/admin-event-management");
  return data;
};
