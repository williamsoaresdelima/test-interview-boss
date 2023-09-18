import axios from "axios";

export const login = async (email: string, password: string) => {
    return await axios.post("http://localhost:3333/v1/auth/login", { email, password });
}