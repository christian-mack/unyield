import AuthButton from "./AuthButton";

export function AdminNavigation() {
  return (
    <nav className="hidden w-full md:flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <AuthButton />
      </div>
    </nav>
  );
}
