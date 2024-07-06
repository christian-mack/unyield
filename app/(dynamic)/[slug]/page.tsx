import {
  createContentfulClient,
  getEntryBySlug,
  getPages,
} from "@/utils/contentful";

const client = createContentfulClient();

export async function getStaticParams() {
  const pages = await getPages();

  return {
    paths: pages.map((page) => ({
      params: { slug: page.slug },
    })),
    fallback: false,
  };
}

export default async function DynamicPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const page = await getEntryBySlug(slug, "page");
  const { title, blocks } = page.fields;

  console.log({ title, blocks });

  return <div>{JSON.stringify(title)}</div>;
}
