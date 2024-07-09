import { ComingSoon } from "@/components/coming-soon";
import Header from "@/components/Header";
import { getEntryBySlug } from "@/utils/contentful";

export default async function Index() {
  const page = await getEntryBySlug("home", "page");

  return <ComingSoon />;
}
