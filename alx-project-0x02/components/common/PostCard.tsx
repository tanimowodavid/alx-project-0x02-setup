import { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userID }: PostProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-green-700 mb-4">{content}</p>
      <p className="text-sm text-green-500">User ID: {userID}</p>
    </div>
  );
}
