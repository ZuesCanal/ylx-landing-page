import { Button } from "@/components/ui/button";
import ylxLogo from "@/assets/ylx-logo.jpeg";

const items = ["Platform", "Intelligence", "Policy", "Routing", "Compliance", "Use Cases", "Company"];

export const Nav = () => (
  <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border">
    <div className="container flex h-44 items-center justify-between">
      <a href="#" aria-label="YLX home" className="flex items-center">
        <img src={ylxLogo} alt="YLX" className="h-40 w-auto object-contain mix-blend-multiply" />
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