import { useRef, useContext } from "react";

export const Form = (props) => {
  const inputVal = useRef(null);
  const { setMovieState } = useContext(props.movieContext);

  function searchHandler(e) {
    e.preventDefault();
    setMovieState("Loading");

    let url = "/.netlify/functions/apiCall";
    let val = JSON.stringify({
      inputVal: `${inputVal.current.value}`,
    });

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      let data = JSON.parse(this.responseText);
      setMovieState(data);
    };

    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(val);
    inputVal.current.value = "";
  }

  return (
    <form className="form">
      <input
        className="form__searcher"
        type="text"
        id="searcher"
        name="searcher"
        placeholder="Movie title"
        ref={inputVal}
        autoFocus
        required
      ></input>
      <button type="submit" className="button" onClick={searchHandler}>
        Search Movie
      </button>
    </form>
  );
};
