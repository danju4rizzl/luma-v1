import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  outline,
  icon,
}: CustomButtonProps) {
  return (
    <button
      className={`px-5 py-2 rounded-full flex place-content-center gap-2 ${
        !outline
          ? "bg-teal-500 text-white hover:bg-teal-800 "
          : "bg-transparent text-teal-800  border border-teal-800  hover:bg-teal-800 hover:text-white"
      }`}
    >
      <span>{icon}</span>
      {title}
    </button>
  );
}

