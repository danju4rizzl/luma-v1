import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  outline,
  icon,
}: CustomButtonProps) {
  return (
    <button
      type="button"
      className={`px-5 py-3 rounded-full flex justify-center items-center ${icon && "gap-2"} ${
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
