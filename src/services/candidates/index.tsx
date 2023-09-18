import axios from "axios";
import { ICandidates } from "../../interfaces/candidates";

const GetAll = async (): Promise<ICandidates[]> => {
  return await axios.get("http://localhost:3333/v1/profiles", {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiIzQDMuY29tLmJyIiwidHlwZSI6IlJFQ1JVSVRFUiIsImlhdCI6MTY5NTAzMzg4NSwiZXhwIjoxNjk1MDM3NDg1fQ.UNdLAFoH3fdShlfMec6Ri8m0iSJkndKeAofoZk9yN1A'
    }
  });
};

const GetById = async (id: number): Promise<ICandidates> => {
  return await axios.get(`http://localhost:3333/v1/profiles/${id}`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiIzQDMuY29tLmJyIiwidHlwZSI6IlJFQ1JVSVRFUiIsImlhdCI6MTY5NTAzMzg4NSwiZXhwIjoxNjk1MDM3NDg1fQ.UNdLAFoH3fdShlfMec6Ri8m0iSJkndKeAofoZk9yN1A'
    }
  });
};

const CandidatesService = { GetAll, GetById };

export default CandidatesService;
