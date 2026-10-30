import styles from "./ColorPaletteComponent.module.css";

function ColorPaletteComponent({ id, value, updatedColorPalette, index }) {
  function handleChange(event) {
    updatedColorPalette(event, index);
  }

  return (
    <>
      <label className={styles["color-label"]} htmlFor={id}>
        Color {index + 1}:
      </label>

      <input
        type="color"
        id={id}
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </>
  );
}

export default ColorPaletteComponent;
