import { Footer } from "@/components/common/Footer";
import { MainNavigation } from "@/components/common/MainNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNavigation />
      <main className="min-h-screen flex w-full">{children}</main>
      <Footer />
    </>
  );
}