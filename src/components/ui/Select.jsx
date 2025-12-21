export function Select({ label, error, children, ...props }){
  return (
    <div>
      {label && <div style={{fontWeight: 700, marginBottom: 6}}>{label}</div>}
      <select className="select" {...props}>
        {children}
      </select>
      {error ? <div style={{color: "rgb(220, 38, 38)", marginTop: 6, fontSize: 13}}>{error}</div> : null}
    </div>
  );
}
