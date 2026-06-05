"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const publicNavigationItems = [
  { label: "Home", href: "/" },
  { label: "Sign Up", href: "/sign-up" },
  { label: "Login", href: "/login" },
];

const privateNavigationItems = [
  { label: "Home", href: "/" },
  { label: "Create Post", href: "/create-post" },
  { label: "All Posts", href: "/posts" },
];

export default function Navbar() {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsLoggedIn(Boolean(localStorage.getItem("token")));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  const navigationItems = isLoggedIn ? privateNavigationItems : publicNavigationItems;

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Blog App
        </Link>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-medium text-gray-600 transition hover:text-gray-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {isLoggedIn && (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
