import { Post } from "@/types/post.types";
// import Image from "next/image";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>⏱ {post.readingTime} min</p>
      {/* <Image src={`http://localhost:7500/${post.image}`} alt={post.title} width={200} height={200} /> */}
      <img src={`http://localhost:7500/${post.image}`} alt="post" width={200} />
    </div>
  );
}
