import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
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
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 60, // optional — ISR (refresh every 60 secs)
  };
}

export default Posts;
