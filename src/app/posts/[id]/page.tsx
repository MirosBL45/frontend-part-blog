import Image from "next/image";

import ProtectedRoute from "@/components/ProtectedRoute";

import { getSinglePost } from "@/services/post.service";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  const id = resolvedParams.id;

  //   console.log("ID:", id);

  const post = await getSinglePost(id);

  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-2xl p-6">
        <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>

        <Image
          src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/${post.image}`}
          alt={post.title}
          width={200}
          height={200}
          className="mb-4 w-full rounded-lg object-cover"
          unoptimized
        />

        <p className="mb-2 text-sm text-gray-500">⏱ {post.readingTime} min</p>

        <p className="text-gray-800">{post.content}</p>
      </div>
    </ProtectedRoute>
  );
}
