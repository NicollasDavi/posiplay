import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={props.id} className="text-lg font-medium text-gray-700">{label}</label>
      <input
        id={props.id}
        className="px-4 py-3 rounded-md bg-white border-2 border-[#F99F1B] focus:ring-2 focus:ring-[#F99F1B] focus:outline-none text-gray-800 transition-shadow duration-300"
        {...props}
      />
    </div>
  );
}
