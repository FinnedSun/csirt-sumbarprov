"use client"
import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";

export default function LogoutPage() {
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    toast.error("Anda bukan admin, akses Anda dibatasi!");
    signOut().then(() => {
      router.push("/"); // Redirect ke halaman utama setelah logout
    });
  }, [signOut, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <LoaderIcon className="animate-spin size-5 text-gray-500" />
    </div>
  )
}