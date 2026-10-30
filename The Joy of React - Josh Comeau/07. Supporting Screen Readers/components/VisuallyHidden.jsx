const hiddenStyle = {
  inlineSize: "1px",
  blockSize: "1px",
  margin: "-1px",
  position: "absolute",
  overflow: "hidden",
  whiteSpace: "nowrap",
  clipPath: "inset(50%)",
};

function VisuallyHidden({ children }) {
  return <span style={hiddenStyle}>{children}</span>;
}

export default VisuallyHidden;
