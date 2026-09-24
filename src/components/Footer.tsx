export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
        <p className="font-semibold text-navy">Refrnce</p>
        <p className="mt-2">
          Refrnce is in active development; figures and methodology are
          illustrative of current capability.
        </p>
        <p className="mt-2">&copy; {year} Refrnce. All rights reserved.</p>
      </div>
    </footer>
  );
}
