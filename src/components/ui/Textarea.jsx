export function Textarea({ label, hint, error, ...props }){
  return (
    <div>
      {label && <div style={{fontWeight: 700, marginBottom: 6}}>{label}</div>}
      <textarea className="textarea" {...props} />
      {error ? <div style={{color: "rgb(220, 38, 38)", marginTop: 6, fontSize: 13}}>{error}</div> : null}
      {!error && hint ? <div className="muted" style={{marginTop: 6, fontSize: 13}}>{hint}</div> : null}
    </div>
  );
}
