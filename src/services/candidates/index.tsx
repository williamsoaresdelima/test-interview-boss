import axios from "axios";
import { ICandidates } from "../../interfaces/candidates";

const GetAll = async (): Promise<ICandidates[]> => {
  return await axios.get("http://localhost:3001/candidates");
};

const GetById = async (id: number): Promise<ICandidates> => {
  return await axios.get(`http://localhost:3001/candidates/${id}`);
};

const CandidatesService = { GetAll, GetById };

export default CandidatesService;
