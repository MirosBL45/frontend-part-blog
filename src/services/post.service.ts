const API_URL = "http://localhost:7500";

export const getPosts = async () => {
  const res = await fetch(`${API_URL}/postovi/get-posts`);

  if (!res.ok) {
    throw new Error("Greska pri fetchovanju postova");
  }

  return res.json();
};
