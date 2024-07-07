import { getEntriesByType } from "..";

export const getPages = async () => {
  const results = await getEntriesByType("page");
  const pages = results.map((page) => page.fields);

  return pages;
};
