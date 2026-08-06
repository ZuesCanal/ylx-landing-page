# YLX — Pre-Seed Investor Landing Page

Single-page marketing site positioning YLX as the trusted control layer
(Sight / Flow / Trace / Guard) for institutional digital asset allocation.
Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run test     # run the Vitest suite
npm run build    # production build
npm run lint     # eslint
```

## Before deploying

- Replace the placeholder Formspree endpoint in
  `src/components/WaitlistForm.tsx` (`FORMSPREE_ENDPOINT`) with the real
  form ID from https://formspree.io.
