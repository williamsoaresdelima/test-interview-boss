import { Box, Card, CardContent, CardHeader } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import Input from "../../components/Input";
import ChatView from "../../components/ChatView";

function Chat() {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);

  const send = (value: string) => {
    socket?.emit("message", value);
  };

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = (message: string) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
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
