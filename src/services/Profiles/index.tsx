import axios from "axios";
import { IProfiler } from "../../interfaces/profiler";

const GetAll = async (): Promise<IProfiler[]> => {
  const token = localStorage.getItem("token");
  const profiler: IProfiler = JSON.parse(localStorage.getItem("profile")!);
  return await axios.get(
    `http://localhost:3333/v1/profiles?type=${
      profiler.type === "CANDIDATE" ? "RECRUITER" : "CANDIDATE"
    }`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const GetById = async (id: number): Promise<IProfiler> => {
  const token = localStorage.getItem("token");
  return await axios.get(`http://localhost:3333/v1/profiles/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const ProfilesService = { GetAll, GetById };

export default ProfilesService;
