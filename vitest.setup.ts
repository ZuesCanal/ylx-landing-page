import "@testing-library/jest-dom/vitest";

// Mock IntersectionObserver for framer-motion whileInView
// jsdom (test environment) has no native IntersectionObserver. framer-motion's whileInView
// feature requires it for scroll-triggered animations (used in SectionReveal, PillarsSection,
// TimelineSection, WaitlistSection). This mock is necessary for all related tests.
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
} as any;
