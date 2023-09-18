import { Box, Card, CardContent, CardHeader } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import Input from "../../components/Input";
import ChatView from "../../components/ChatView";
import { useParams } from "react-router";
import ChatService from "../../services/Chat";

const socket: Socket = io({
  autoConnect: false,
});

function Chat() {
  const profile = JSON.parse(localStorage.getItem("profile")!);
  const isRecruiter = profile.type === "RECRUITER";
  const { id: paramId } = useParams();
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<any>([]);

  const send = (value: string) => {
    console.log(value);
    socket?.emit("message", {
      content: value,
      sender_id: profile.id, // id_usuario_logado
      recipient_id: paramId, // id_usuario_recebedor
    });
  };
  const getMessage = async () => {
    const allMessages = await getMessages(paramId);
    setMessages(allMessages);
  };

  useEffect(() => {
    getMessage();
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = () => {
    getMessage();
  };

  useEffect(() => {
    socket?.on("connect", () => {
      socket?.emit("join_room", {
        roomName: `room_${isRecruiter ? profile.id : paramId}#${
          isRecruiter ? paramId : profile.id
        }`,
        socketId: socket?.id,
      });
    });
    socket?.on("message", messageListener);
    return () => {
      socket?.off("message", messageListener);
    };
  }, [messageListener]);

  return (
    <Box>
      <Card>
        <CardHeader>CHAT</CardHeader>
        <CardContent>
          <ChatView messages={messages}></ChatView>
          <br />
          <Input send={send} />
        </CardContent>
      </Card>
    </Box>
  );
}

const getMessages = async (paramId: any): Promise<string[]> => {
  let receive: any[] = (await ChatService.GetAll(paramId)).data;
  return receive;
};

export default Chat;
