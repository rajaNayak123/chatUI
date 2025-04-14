import React from 'react';
import { formatTimestamp } from './utils';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  const renderFile = () => {
    if (!message.file) return null;

    const bubbleStyle = isUser
      ? 'bg-blue-600 text-white rounded-br-none'
      : 'bg-gray-200 text-gray-800 rounded-bl-none';

    if (message.file.type === 'image') {
      return (
        <div className={`overflow-hidden rounded-xl mt-2 ${isUser ? 'ml-auto' : 'mr-auto'}`}>
          <img
            src={message.file.url}
            alt="uploaded"
            className="rounded-xl max-w-[250px] w-full object-cover shadow-md border border-gray-300"
          />
        </div>
      );
    }

    return (
      <div className="mt-2">
        <a
          href={message.file.url}
          download={message.file.name}
          className="text-sm text-blue-500 underline break-all"
        >
          📎  {message.file.name}
        </a>
      </div>
    );
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} px-2`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-md break-words mb-2 ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-900 rounded-bl-none'
        }`}
      >
        {typeof message.text === 'string' && message.text.trim() !== '' && (
          <p className="whitespace-pre-line">{message.text}</p>
        )}
        {renderFile()}
        <span className="text-xs block mt-1 text-gray-400 text-right">
          {formatTimestamp(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default React.memo(ChatMessage);
