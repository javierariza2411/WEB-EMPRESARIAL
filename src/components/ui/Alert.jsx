export function Alert({ variant="info", title, children }){
  const style = {
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid var(--brand-border)",
    background: "var(--brand-surface)"
  };

  if(variant === "success"){
    style.border = "1px solid rgba(34,197,94,0.35)";
    style.background = "rgba(34,197,94,0.08)";
  }
  if(variant === "error"){
    style.border = "1px solid rgba(239,68,68,0.35)";
    style.background = "rgba(239,68,68,0.08)";
  }

  return (
    <div style={style}>
      {title ? <div style={{fontWeight: 800, marginBottom: 6}}>{title}</div> : null}
      <div className="muted" style={{color: "var(--brand-text)"}}>{children}</div>
    </div>
  );
}
