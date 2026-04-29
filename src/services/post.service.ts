const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL nije definisan");
}

export async function getPosts() {
  const res = await fetch(`${API_URL}/postovi/get-posts`);

  if (!res.ok) {
    throw new Error("Greska pri fetchovanju postova");
  }

  return res.json();
}

export async function getSinglePost(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/postovi/post/${id}`, {
    cache: "no-store",
  });

  // console.log("STATUS:", res.status);

  const data = await res.json().catch(() => ({ message: "Nije JSON odgovor" }));

  // console.log("DATA:", data);

  if (!res.ok) {
    throw new Error(data.message || "Greška prike");
  }

  return data;
}
