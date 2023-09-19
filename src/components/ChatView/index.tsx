import React from 'react'

function ChatView({messages}:{messages:string[]}) {
    console.log(messages)
  return (
    <div>
        <br/>
        {messages.map((x) => x)}
        
    </div>
  )
}

export default ChatView