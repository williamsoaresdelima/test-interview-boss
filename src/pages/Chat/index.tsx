import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Socket, io } from 'socket.io-client';
import Input from '../../components/Input';
import ChatView from '../../components/ChatView';

function ChatPage() {
    const { id } = useParams();
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<string[]>([])
    const navigate = useNavigate()

    const send = (value: string) => {
        socket?.emit("message", value)
    }

    const messageListener = (message: string) => {
        setMessages([...messages, message])
    }

    useEffect(() => {
        const newSocket = io("http://localhost:8080")
        setSocket(newSocket)
    }, [setSocket])

    useEffect(() => {
        socket?.on("message", messageListener)
        return () => {
            socket?.off("message", messageListener)
        }
    },[messageListener])
    return (
        <div>
            <div>ChatPage</div>
            <Input send={send} />
            <ChatView messages={messages}/>
            <button onClick={() => navigate(`/`)}>Go back to list</button>
        </div>
    )
}

export default ChatPage