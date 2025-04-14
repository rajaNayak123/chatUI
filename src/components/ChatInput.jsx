import React, { useState, useRef } from "react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const fileInputRef = useRef();

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const isImage = file.type.startsWith("image/");
      const fileData = {
        url: reader.result,
        name: file.name,
        type: isImage ? "image" : "file",
      };
      onSend("", "user", fileData);
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
        className="text-gray-500 mr-2 ml-2 hover:text-gray-700 cursor-pointer"
        title="Attach file"
        aria-label="Attach file"
      >
        📎
      </button>
      <button
        onClick={handleSend}
        className="w-[50px] h-[50px] cursor-pointer bg-[#2389e9] text-white p-2 flex items-center justify-center border-none transition-all duration-500 ease-in-out hover:rounded-full group"
      >
        <span
          className="w-[50px] h-[50px] bg-no-repeat bg-center bg-cover transition-all duration-[900ms] ease-in-out group-hover:rotate-[24deg]"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTczLjE4IDE5OC42MnYwbC0zOTYuMDkgNjMuNzE5Yy03Ljc1IDAuODU5MzgtOS40NzI3IDExLjE5NS0zLjQ0NTMgMTUuNWw5Ny4zMDEgNjguODgzLTE1LjUgMTEyLjhjLTAuODU5MzggNy43NSA3Ljc1IDEyLjkxNCAxMy43NzcgNy43NWw1NS4xMDktNDQuNzczIDI2LjY5MSAxMjQuODVjMS43MjI3IDcuNzUgMTEuMTk1IDkuNDcyNyAxNS41IDIuNTgybDIxNS4yNy0zMzguMzljMy40NDE0LTYuMDI3My0xLjcyNjYtMTMuNzc3LTguNjEzMy0xMi45MTR6bS0zNzIuODQgNzYuNjMzIDMxMy40Mi00OS45NDEtMjMzLjM0IDEwNy42M3ptNzQuMDUxIDE2NS4zMiAxMi45MTQtOTIuMTMzYzgwLjkzOC0zNy4wMjcgMTM5LjQ5LTY0LjU3OCAyMjkuMDQtMTA1LjkxLTEuNzE4OCAxLjcyMjctMC44NTkzNyAwLjg1OTM4LTI0MS45NSAxOTguMDR6bTg4LjY4OCA4Mi42Ni0yNC4xMDktMTEyLjggMTk5Ljc3LTE2Mi43NHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==")`,
          }}
        ></span>
      </button>
    </div>
  );
};

export default React.memo(ChatInput);
