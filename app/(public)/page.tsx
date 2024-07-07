import Header from "@/components/Header";
import { getEntryBySlug } from "@/utils/contentful";

export default async function Index() {
  const page = await getEntryBySlug("home", "page");

  return (
    <div className="flex-1 w-full flex flex-col">
      <Header />
    </div>
  );
}
