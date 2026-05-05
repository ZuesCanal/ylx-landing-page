import { ReactNode } from "react";

export const Section = ({
  id,
  eyebrow,
  title,
  body,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  children?: ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-20 sm:py-28 ${className}`}>
    <div className="container">
      {(eyebrow || title || body) && (
        <div className="max-w-3xl mb-12 sm:mb-16">
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-mono mb-4">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.1] tracking-tight text-current">
              {title}
            </h2>
          )}
          {body && <p className="mt-5 text-base sm:text-lg opacity-75 leading-relaxed">{body}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);