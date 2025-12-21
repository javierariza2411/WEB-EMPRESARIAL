export function Button({ variant="primary", type="button", className="", children, ...props }){
  const v = variant === "outline" ? "btn btn-outline" : "btn btn-primary";
  return (
    <button type={type} className={`${v} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
