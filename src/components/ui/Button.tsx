import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
    return (
      <button
        className={
          `bg-[#F99F1B] text-white font-semibold py-3 px-8 rounded-full shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300 ${className}`
        }
        {...props}
      >
        {children}
      </button>
    );
  }
  