import axios from "axios";
import { IProfiler } from "../../interfaces/profiler";

export const login = async (email: string, password: string) => {
  return await axios.post("http://localhost:3333/v1/auth/login", {
    email,
    password,
  });
};

export const signUp = async (data: IProfiler) => {
  return await axios.post("http://localhost:3333/v1/profiles", {
    ...data,
    phone_number: data.phoneNumber,
  });
};
