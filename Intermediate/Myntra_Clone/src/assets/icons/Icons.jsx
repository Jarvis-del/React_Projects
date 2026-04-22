/** Reusable SVG icon components */

export const HeartIcon = ({ on }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill={on ? "#ff3f6c" : "none"}
    stroke={on ? "#ff3f6c" : "#555"}
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const BagIcon = () => (
  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

export const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#888" strokeWidth="2.2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const FilterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4"  y1="6"  x2="20" y2="6"  />
    <line x1="8"  y1="12" x2="16" y2="12" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);

export const StarIcon = () => (
  <svg viewBox="0 0 10 10" width="10" height="10" fill="#fff">
    <polygon points="5,1 6.5,3.5 9,4 7,6 7.5,9 5,7.5 2.5,9 3,6 1,4 3.5,3.5" />
  </svg>
);
