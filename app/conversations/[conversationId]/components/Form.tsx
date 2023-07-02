"use client";

import axios from "axios";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import useConversation from "@/app/hooks/useConversation";
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";

const Form = () => {
  const { conversationId } = useConversation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      messages: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId,
    });
  };

  return (
    <div
      className="
            py-4
            px-4
            w-full
            bg-white
            border-t-[1px]
            flex
            items-center
            gap-2
            lg:gap-4
        "
    >
      <HiPhoto size={30} className="text-sky-500" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Message"
        />
      </form>
    </div>
  );
};

export default Form;
