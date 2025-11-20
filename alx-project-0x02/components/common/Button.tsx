import { type ButtonProps } from "@/interfaces";
import clsx from "clsx";

export default function Botton({ size, shape }: ButtonProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <button
        className={clsx(`${shape}`, {
          "text-sm": size === "small",
          "text-base": size === "medium",
          "text-lg": size === "large",
        })}
      >
        Click me
      </button>
    </div>
  );
}
