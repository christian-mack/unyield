import { cn } from "@/lib/utils";

export function CustomSection({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <section className={cn("grid grid-cols-12 px-[80px]", style)}>
      {children}
    </section>
  );
}
