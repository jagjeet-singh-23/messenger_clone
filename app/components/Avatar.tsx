"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div
        className="
        relative
        inline-block
        rounded-full
        overflow-hidden
        w-9
        h-9 
        md:w-11
        md:h-11
      "
      >
        <Image
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <span
        className="
          absolute
          block
          rounded-full
          bg-green-500
          ring-2
          top-0
          right-0
          h-2
          w-2
          md:h-3
          md:w-3
        "
      />
    </div>
  );
};

export default Avatar;
