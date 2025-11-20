import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      {posts.map((post) => (
        <PostCard
          key={post.userID}
          title={post.title}
          content={post.content}
          userID={post.userID}
        />
      ))}
    </div>
  );
}
