"use client";

import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `
            group
            flex
            gap-x-3
            text-sm
            leading-6
            font-semibold
            w-full
            justify-center
            p-4
            text-gray-500
            hover:text-black
            hover:bg-gray-100
        `,
        active && "text-black bg-gray-100"
      )}
    >
      <Icon className="w-6 h-5" />
    </Link>
  );
};

export default MobileItem;
