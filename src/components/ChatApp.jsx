import React, { useEffect, useState, useCallback } from 'react';
import ChatContainer from './ChatContainer.jsx';
import ChatInput from './ChatInput.jsx';
import { loadMessages, saveMessages } from './utils.js';

const ChatApp = () => {
  const [messages, setMessages] = useState(loadMessages);

  const addMessage = useCallback((text, sender = 'user', file = null) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date().toISOString(),
      file,
    };
    setMessages((prev) => {
      const updated = [...prev, newMessage];
      saveMessages(updated);
      return updated;
    });
  }, []);

  // Simulate bot reply for user messages
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.sender === 'user') {
      const timeout = setTimeout(() => {
        addMessage('Hi, I’m a bot 🤖', 'bot');
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [messages, addMessage]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md h-[90vh] bg-white rounded-2xl shadow-xl flex flex-col">
        <ChatContainer messages={messages} />
        <ChatInput onSend={addMessage} />
      </div>
    </div>
  );
};

export default ChatApp;
