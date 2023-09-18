import React from "react";
import { useParams } from "react-router-dom";

function ChatView({ messages }: { messages: any }) {
  const profile = JSON.parse(localStorage.getItem("profile")!);
  console.log(messages, profile.id);
  // messages.forEach((x: any) => console.log(x.sender_id === profile.id));
  return (
    <div>
      {messages.map((msg: any, idx: number) => {
        return (
          <div
            style={{
              textAlign: `${msg.sender_id !== +profile.id! ? "left" : "right"}`,
            }}
            key={idx}
          >
            {msg.content}
          </div>
        );
      })}
    </div>
  );
}

export default ChatView;
