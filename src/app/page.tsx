import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Postovi</h1>

      <p>Welcome to the posts page!</p>
      <Link href="/posts" className="text-green-500">
        View All Posts
      </Link>
    </div>
  );
}
