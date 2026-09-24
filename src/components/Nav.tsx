export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element -- quick local preview only */}
        <img
          src="/refrnce-logo.png"
          alt="Refrnce"
          className="h-11 w-11 rounded-md shadow-sm"
        />
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex" aria-label="Primary navigation">
          <a className="transition-colors hover:text-ink" href="#trace">Trace</a>
          <a className="transition-colors hover:text-ink" href="#workflow">Workflow</a>
          <a className="transition-colors hover:text-ink" href="#intelligence">Intelligence</a>
        </nav>
        <a
          href="#waitlist"
          className="rounded bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-80"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
