import Image from "next/image";
import Link from "next/link";

import { Post } from "@/types/post.types";

const UPLOADS_URL = process.env.NEXT_PUBLIC_UPLOADS_URL;

if (!UPLOADS_URL) {
  throw new Error("NEXT_PUBLIC_UPLOADS_URL nije definisan");
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post._id}`}>
      <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
        <p className="mb-3 text-sm text-gray-700">{post.content}</p>
        <p className="mb-3 text-sm text-gray-500">⏱ {post.readingTime} min</p>

        <div className="relative h-56 w-full overflow-hidden rounded-lg">
          <Image
            src={`${UPLOADS_URL}/${post.image}`}
            alt={post.title}
            className="object-cover"
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </div>
    </Link>
  );
}
