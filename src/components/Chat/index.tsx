import React from "react";

type ChatProps = {
  title?: string;
  children: React.ReactNode;
};

const Chat: React.FC<ChatProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Chat;
