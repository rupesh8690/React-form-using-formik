import { useState, useEffect } from "react";

export default function Jokes() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  let [joke, setJoke] = useState({});

  const getJoke = async () => {
    let response = await fetch(url);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({
      punchline: jsonResponse.punchline,
      setup: jsonResponse.setup,
    });
  };

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({
        punchline: jsonResponse.punchline,
        setup: jsonResponse.setup,
      });
    }
    fetchData();
  }, []);

  return (
    <div>
      <h3>Joker</h3>
      <h4>{joke.setup}</h4>
      <p>{joke.punchline}</p>

      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={getJoke}
      >
        New Joke
      </button>
    </div>
  );
}
