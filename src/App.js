import { createContext, useState } from "react";
import { Form } from "./Form.js";
import { Display } from "./Display.js";
import { List } from "./List.js";

const movieContext = createContext();
const listContext = createContext();

function App() {
  const [movieState, setMovieState] = useState("");
  const [listState, setListState] = useState([]);

  return (
    <movieContext.Provider value={{ movieState, setMovieState }}>
      <listContext.Provider value={{ listState, setListState }}>
        <h1>Make your Movie List</h1>
        <hr />
        <Form movieContext={movieContext} />
        <Display movieContext={movieContext} listContext={listContext} />
        <List listContext={listContext} />
      </listContext.Provider>
    </movieContext.Provider>
  );
}

export default App;
