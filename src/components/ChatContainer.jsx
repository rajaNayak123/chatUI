import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage.jsx';

const ChatContainer = ({ messages }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default React.memo(ChatContainer);
