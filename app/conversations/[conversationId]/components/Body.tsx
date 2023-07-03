"use client";

import axios from "axios";
import { FullMessageType } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import useConversation from "@/app/hooks/useConversation";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  const { conversationId } = useConversation();
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          key={message.id}
          isLast={i === messages.length - 1}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
