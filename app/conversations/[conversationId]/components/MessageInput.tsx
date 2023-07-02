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
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoCorrect={id}
        {...register(id, { required })}
        className="
                text-black
                w-full
                rounded-full
                focus:outline-none
                bg-neutral-100
                px-4
                py-2
                font-light
            "
      />
    </div>
  );
};

export default MessageInput;
