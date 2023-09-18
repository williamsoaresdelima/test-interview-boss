import { Box, Card, CardContent, CardHeader } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import Input from "../../components/Input";
import ChatView from "../../components/ChatView";
import { useParams } from "react-router";

const socket: Socket = io({
  autoConnect: false,
})

function Chat() {
  const sender_id = 9;
  const { id: recipient_id } = useParams();
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);

  const send = (value: string) => {
    socket?.emit("message", {
      content: value,
      sender_id, // id_usuario_logado
      recipient_id // id_usuario_recebedor
    });
  };

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = (message: string) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    socket?.on('connect', () => {
      socket?.emit('join_room', {
        roomName: `room_${sender_id}#${recipient_id}`, // o nome da sala vai ser room_{id_usuario_logado}#{id_usuario_recebedor}
        socketId: socket?.id
      })
    })
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
          <Input send={send} />
          <br />
          <ChatView messages={messages}></ChatView>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Chat;
