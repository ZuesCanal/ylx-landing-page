import { Button } from "@/components/ui/button";

const items = ["Platform", "Intelligence", "Policy", "Routing", "Compliance", "Use Cases", "Company"];

export const Nav = () => (
  <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border">
    <div className="container flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-navy text-primary-foreground text-[11px] font-bold">Y</span>
        YLX
      </a>
      <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
        {items.map((i) => (
          <a key={i} href="#" className="hover:text-foreground transition-colors">{i}</a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-foreground">View demo</Button>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-glow">Request access</Button>
      </div>
    </div>
  </header>
);