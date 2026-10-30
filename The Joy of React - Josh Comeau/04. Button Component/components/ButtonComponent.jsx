function ButtonComponent({ themeColor, children }) {
  return (
    <button
      type="button"
      style={{
        border: `2px solid ${themeColor}`,
        color: themeColor,
      }}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
