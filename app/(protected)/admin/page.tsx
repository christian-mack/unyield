import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { Footer } from "@/components/common/Footer";
import { MainNavigation } from "@/components/common/MainNavigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Admin page coming soon...
      </p>
    </div>
  );
}
