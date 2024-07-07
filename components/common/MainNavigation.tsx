import AuthButton from "./AuthButton";

export function MainNavigation() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <AuthButton />
      </div>
    </nav>
  );
}
