export function ComingSoon() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#FFFF00] px-4 py-12 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-md text-center">
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Coming Soon
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're working hard to bring you something amazing. Stay tuned for
          updates!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div />
        </div>
      </div>
    </div>
  );
}
