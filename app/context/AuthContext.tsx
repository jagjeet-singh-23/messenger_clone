"use client";
import { SessionProvider } from "next-auth/react";

interface AuthCOntextProps {
  children: React.ReactNode;
}
export default function AuthContext({ children }: AuthCOntextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
