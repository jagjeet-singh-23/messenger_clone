"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

const MessageInput: React.FC<MessageInputProps> = ({
  id,
  placeholder,
  type,
  required,
  errors,
  register,
}) => {
  return <div>MessageInput</div>;
};

export default MessageInput;
