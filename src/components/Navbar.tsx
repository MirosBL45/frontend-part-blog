"use client";

import Link from "next/link";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Create Post",
    href: "/create-post",
  },
  {
    label: "Sign Up",
    href: "/sign-up",
  },
];

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Blog App
        </Link>

        <ul className="flex items-center gap-6">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-medium text-gray-600 transition hover:text-gray-950">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
