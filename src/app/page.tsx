import { getPosts } from "@/services/post.service";
import PostCard from "@/components/PostCard";
import { Post } from "@/types/post.types";

export default async function Home() {
  const data = await getPosts();

  return (
    <div>
      <h1>Postovi</h1>

      {data.data.map((post: Post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
