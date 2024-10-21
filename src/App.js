import "./index.css";
import Card from "./components/Card";
import Colors from "./components/Colors";
import Actions from "./components/Actions";
import Emotions from "./components/Emotions";

import { useState } from "react";

function App() {
  const [options, setOptions] = useState(false);
  const [selected, setSelected] = useState("vocabulary");

  let optionsStyle = {
    // transform: `translateY(${options ? "-380px" : "-500px"})`,
    transition: "all 1s",
    top: `${options ? "-25px" : "-150px"}`,
  };

  let textToDisplay = "";

  if (selected === "colors") {
    textToDisplay = <Colors />;
  } else if (selected === "actions") {
    textToDisplay = <Actions />;
  } else if (selected === "emotions") {
    textToDisplay = <Emotions />;
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <header>
          <div className="circle" onClick={() => setOptions(!options)}></div>
          <h1>{selected}</h1>
        </header>

        <main>{textToDisplay}</main>
      </div>

      <div className="options" style={optionsStyle}>
        <h2
          onClick={() => {
            setOptions(false);
            setSelected("colors");
          }}
        >
          colors
        </h2>
        <h2
          onClick={() => {
            setOptions(false);
            setSelected("actions");
          }}
        >
          actions
        </h2>
        <h2
          onClick={() => {
            setOptions(false);
            setSelected("emotions");
          }}
        >
          emotions
        </h2>
      </div>
    </div>
  );
}

export default App;
