"use client";

import { useState } from "react";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      alert("Slika je obavezna");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    const token = localStorage.getItem("token"); // za sad ručno ćemo ubaciti

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/postovi/create-post`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Post kreiran 🚀");

    setTitle("");
    setContent("");
  };

  return (
    <ProtectedRoute>
      <div className="mx-auto mt-10 max-w-xl rounded-2xl border p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold">Novi Post</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Naslov"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={6}
            className="w-full rounded-lg border p-3"
          />

          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />

          <button className="rounded-lg bg-black px-6 py-3 text-white" type="submit">
            Kreiraj post
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
