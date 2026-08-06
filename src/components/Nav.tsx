export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- quick local preview only */}
        <img src="/phylx-logo.jpeg" alt="YLX" className="h-16 w-auto" />
        <a
          href="#waitlist"
          className="rounded-full bg-navy px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          Request Access
        </a>
      </div>
    </header>
  );
}
