export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight text-navy">
          YLX
        </span>
        <a
          href="#waitlist"
          className="rounded-full bg-navy px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-black"
        >
          Request Access
        </a>
      </div>
    </header>
  );
}
