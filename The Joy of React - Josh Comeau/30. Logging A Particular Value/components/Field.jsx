import React from "react";

function Field({ type, className, value, handler, children }) {
  const id = React.useId();

  return (
    <div className={className}>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} value={value} onChange={handler} />
    </div>
  );
}

export default Field;
