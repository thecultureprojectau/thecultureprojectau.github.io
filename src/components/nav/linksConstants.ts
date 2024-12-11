export const linkConstantsMap = {
  "/": "Where are we?",
  "/the-journey": "The Journey",
  "/is-cp-for-me": "Is CP for me?",
  "/leaders-immersion-program": "Leaders Immersion Program",
  "/partners": "Partners",
} as const;

export type LinkPathType = keyof typeof linkConstantsMap;
