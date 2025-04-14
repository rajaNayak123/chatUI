import React, { useState, useRef } from 'react';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef();
  const fileInputRef = useRef();

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const isImage = file.type.startsWith('image/');
      const fileData = {
        url: reader.result,
        name: file.name,
        type: isImage ? 'image' : 'file',
      };
      onSend('', 'user', fileData);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 border-t flex items-center gap-2">
      <input
        ref={inputRef}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        aria-label="Chat input"
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,application/pdf"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="text-gray-500 hover:text-gray-700 cursor-pointer"
        title="Attach file"
        aria-label="Attach file"
      >
        📎
      </button>
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 cursor-pointer transition focus:outline-none"
        aria-label="Send message"
      >
        Send
      </button>
    </div>
  );
};

export default React.memo(ChatInput);
