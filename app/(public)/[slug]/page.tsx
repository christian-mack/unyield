import {
  createContentfulClient,
  getEntryBySlug,
  getPages,
} from "@/utils/contentful";

const client = createContentfulClient();

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.map((page) => {
    return { slug: page.slug };
  });
}

export default async function DynamicPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const page = await getEntryBySlug(slug, "page");
  if (!page || !page.fields) {
    return;
  }
  const { title, blocks } = page.fields;

  return <div>{JSON.stringify(title)}</div>;
}
