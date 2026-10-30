import React from "react";

import COUNTRIES from "../data.js";

const countryNames = Object.entries(COUNTRIES);

function App() {
  const [selectedCountry, setSelectedCountry] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You selected: ${COUNTRIES[selectedCountry]}`);
  }

  return (
    <form action="" onSubmit={(event) => handleSubmit(event)}>
      <fieldset>
        <legend>Shipping Info</legend>

        <label htmlFor="country">Country:</label>

        <select
          id="country"
          name="country"
          required={true}
          value={selectedCountry}
          onChange={(event) => {
            setSelectedCountry(event.target.value);
          }}
        >
          <option value="">— Select Country —</option>

          <optgroup label="Countries">
            {countryNames.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </optgroup>
        </select>
      </fieldset>

      <p>
        Selected country:
        <span className="selected-country">{COUNTRIES[selectedCountry]}</span>
      </p>
      <button className="submit">Submit</button>
    </form>
  );
}

export default App;
