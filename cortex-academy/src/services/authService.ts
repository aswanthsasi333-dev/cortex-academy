import { api } from "./api";

export const loginUser = async (data: any) => {
  return api.post("/login", data);
};