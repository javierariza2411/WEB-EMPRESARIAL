export function applyTheme(tokens){
  const root = document.documentElement;
  const c = tokens?.colors || {};
  root.style.setProperty("--brand-primary", c.primary || "rgb(12, 32, 54)");
  root.style.setProperty("--brand-secondary", c.secondary || "rgb(18, 64, 96)");
  root.style.setProperty("--brand-accent", c.accent || "rgb(220, 150, 60)");
  root.style.setProperty("--brand-bg", c.background || "rgb(245, 247, 250)");
  root.style.setProperty("--brand-surface", c.surface || "rgb(255, 255, 255)");
  root.style.setProperty("--brand-text", c.text || "rgb(15, 23, 42)");
  root.style.setProperty("--brand-muted", c.muted || "rgb(100, 116, 139)");
  root.style.setProperty("--brand-border", c.border || "rgb(226, 232, 240)");
  if(tokens?.name) document.title = tokens.name;
}
