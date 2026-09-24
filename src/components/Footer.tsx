export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-sm text-muted sm:px-8 md:flex-row md:items-end md:justify-between">
        <div><p className="font-semibold text-ink">Refrnce</p>
        <p className="mt-2">
          Source-linked context for digital-asset decisions.
        </p></div>
        <div className="md:text-right"><p>Refrnce is in active development; outputs require institutional review.</p><p className="mt-2">&copy; {year} Refrnce. All rights reserved.</p></div>
      </div>
    </footer>
  );
}
