import axios from "axios";

const GetSend = async (): Promise<any> => {
  const token = localStorage.getItem("token");
  return await axios.get(`http://localhost:3333/v1/chat/messages/sent`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const GetReceived = async (): Promise<any> => {
  const token = localStorage.getItem("token");
  return await axios.get(`http://localhost:3333/v1/chat/messages/received`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const GetAll = async (id: number): Promise<any> => {
  const token = localStorage.getItem("token");
  return await axios.get(
    `http://localhost:3333/v1/chat/messages?otherProfile=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const ChatService = { GetAll, GetSend, GetReceived };

export default ChatService;
