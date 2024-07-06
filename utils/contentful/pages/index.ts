import { getEntriesByType } from "..";

export const getPages = async () => {
  const results = await getEntriesByType("page");
  const pages = results.map((page) => {
    return {
      slug: page.fields.slug,
      title: page.fields.title,
      blocks: page.fields.blocks,
    };
  });

  return pages;
};
