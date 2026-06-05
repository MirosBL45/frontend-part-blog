import PostCard from "@/components/PostCard";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Post } from "@/types/post.types";

import { getPosts } from "@/services/post.service";

export default async function PostsPage() {
  const data = await getPosts();

  return (
    <ProtectedRoute>
      <div>
        <h1>Postovi22</h1>

        {data.data.map((post: Post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </ProtectedRoute>
  );
}
