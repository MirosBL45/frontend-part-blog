"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();

  const hasToken = typeof window !== "undefined" && Boolean(localStorage.getItem("token"));

  useEffect(() => {
    if (!hasToken) {
      router.push("/");
    }
  }, [hasToken, router]);

  if (!hasToken) {
    return null;
  }

  return <>{children}</>;
}
