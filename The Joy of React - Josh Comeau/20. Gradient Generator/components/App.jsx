import React from "react";

import ColorPaletteComponent from "./ColorPaletteComponent.jsx";

function App() {
  const [colors, setColors] = React.useState(["#FFD500", "#FF0040"]);

  const colorStops = colors.join(", ");

  const backgroundImage = `linear-gradient(${colorStops})`;

  function updatedColorPalette(event, index) {
    const nextColors = [...colors];

    nextColors[index] = event.target.value;

    setColors(nextColors);
  }

  function handleAddColor() {
    const nextColors = [...colors];

    if (nextColors.length >= 5) {
      alert("There is a maximum of 5 colors");
      return;
    }

    nextColors.push("#FF0000");

    setColors(nextColors);
  }

  function handleRemoveColor() {
    const nextColors = [...colors];

    if (nextColors.length <= 2) {
      alert("There is a minimum of 2 colors");
      return;
    }

    nextColors.pop();

    setColors(nextColors);
  }

  return (
    <form>
      <div className="buttons-wrapper">
        <button
          className="action-button"
          type="button"
          onClick={handleRemoveColor}
        >
          Remove Color
        </button>

        <button
          className="action-button"
          type="button"
          onClick={handleAddColor}
        >
          Add Color
        </button>
      </div>

      <div className="gradient-preview" style={{ backgroundImage }} />

      <ul className="color-palettes-wrapper">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;

          return (
            <li key={colorId} className="color-wrapper">
              <ColorPaletteComponent
                id={colorId}
                value={color}
                updatedColorPalette={updatedColorPalette}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default App;
