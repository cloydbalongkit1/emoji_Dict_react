import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia"; //data


function createEmojipedia(arryEmojipedia) {
  return(
    <Dictionary 
      key={arryEmojipedia.id}
      spanEmoji={arryEmojipedia.emoji}
      spanName={arryEmojipedia.name}
      ddMeaning={arryEmojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEmojipedia)}
      </dl>
    </div>
  );
}

export default App;

