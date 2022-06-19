import React, { useState, useEffect } from "react";

const API_URL = "http://api.icndb.com/jokes/random";

function App() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setJoke(data.value.joke));
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className="App">
      <h3>Jokes Generator</h3>
      <p dangerouslySetInnerHTML={{ __html: joke }} />
      <button onClick={generateJoke}>
        {" "}
        Get new joke{" "}
        <span role="img" aria-label="laugh emoji">
          😂
        </span>
      </button>
    </div>
  );
}

export default App;
