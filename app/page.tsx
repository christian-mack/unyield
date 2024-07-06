import Header from "@/components/Header";
import { getEntryBySlug } from "@/utils/contentful";

export default async function Index() {
  const page = await getEntryBySlug("home", "page");

  const renderBlockByType = (blocks: any) => {
    if (!blocks) return <></>;

    blocks.map((block: any) => {
      switch (block.sys.contentType.sys.id) {
        case "header":
          return <Header />;
        default:
          return <></>;
      }
    });
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {/* Navigation */}
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm"></div>
      </nav>

      {/* Main content */}
      {renderBlockByType(page.fields.blocks)}
      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6"></main>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs"></footer>
    </div>
  );
}
