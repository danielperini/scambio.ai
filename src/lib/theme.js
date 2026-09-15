const KEY = "scambio-theme";

export function getTheme() {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem(KEY) || "light";
}

export function applyTheme(mode) {
  if (typeof window === "undefined") return;
  const dark =
    mode === "dark" ||
    (mode === "system" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function setTheme(mode) {
  try { localStorage.setItem(KEY, mode); } catch (e) {}
  applyTheme(mode);
}

export function cycleTheme() {
  const order = ["light", "dark", "system"];
  const next = order[(order.indexOf(getTheme()) + 1) % order.length];
  setTheme(next);
  return next;
}