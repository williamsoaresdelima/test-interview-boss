import React from "react";

function ChatView({ messages }: { messages: string[] }) {
  return (
    <div>
      {messages.map((msg: string, idx: number) => {
        return <div key={idx}>{msg}</div>;
      })}
    </div>
  );
}

export default ChatView;
