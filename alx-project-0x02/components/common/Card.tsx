import { CardProps } from "@/interfaces";
export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  );
}
