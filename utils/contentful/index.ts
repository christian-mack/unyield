import { createClient } from "contentful";
import { getPages } from "./pages";

export const createContentfulClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
};
const client = createContentfulClient();

export const getEntriesByType = async (type: string) => {
  return (await client.getEntries({ content_type: type })).items;
};

export const getEntryBySlug = async (slug: string, type: string) => {
  const queryOptions = {
    content_type: type,
    "fields.slug": slug,
  };

  const queryResult = await client.getEntries(queryOptions);

  return queryResult.items[0];
};

export { getPages };
