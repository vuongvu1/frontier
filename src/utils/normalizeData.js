
export const normalizeMatches = (matches) => (
  Object.keys(matches).map((key) => ({ key, ...matches[key] }))
);