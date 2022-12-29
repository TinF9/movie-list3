import { useContext } from "react";

export const Display = (props) => {
  const { movieState } = useContext(props.movieContext);
  const { Poster, Title, Genre, Year, Runtime, Plot, Director, Actors } =
    movieState;

  const { listState, setListState } = useContext(props.listContext);

  if (movieState === "") {
    return (
      <>
        <hr />
        <h3 style={{ color: "red" }}>Search a movie to see its info.</h3>
        <hr />
      </>
    );
  } else if (movieState === "Loading") {
    return (
      <>
        <hr />
        <h2 style={{ color: "red" }}>Loading...</h2>
        <hr />
      </>
    );
  } else if ("Error" in movieState) {
    if (movieState.Error === "Incorrect IMDb ID.") {
      return (
        <>
          <hr />
          <h3 style={{ color: "red" }}>Empty input.</h3>
          <hr />
        </>
      );
    } else if (movieState.Error === "Movie not found!") {
      return (
        <>
          <hr />
          <h3 style={{ color: "red" }}>Sorry, movie not found.</h3>
          <hr />
        </>
      );
    } else if (movieState.Error === "Invalid API key!") {
      return (
        <>
          <hr />
          <h3 style={{ color: "red" }}>Invalid API key.</h3>
          <hr />
        </>
      );
    }
  }

  const addToList = () => {
    let arr;
    let alreadyThere = listState.includes(movieState);
    if (alreadyThere) {
      arr = [...listState];
      alert("This movie is already on your list.");
    } else {
      arr = [...listState, movieState];
    }
    setListState(arr);
  };

  return (
    <>
      <hr />
      <div className="display">
        <div className="display__poster">
          <img src={Poster} alt={Title + " poster image"} />
        </div>
        <div className="display__text">
          <div className="display__header">
            <h2 className="display__headerItem--title">{Title}</h2>
            <p className="display__headerItem--time">
              <b>{Runtime}</b>
            </p>
            <p className="display__headerItem--genre">
              {Year}
              <b> | </b>
              {Genre}
            </p>
          </div>
          <div className="display__details">
            <p className="display__details--further">{Plot}</p>
            <p className="display__details--closer">
              <b>Director: </b>
              {Director}
            </p>
            <p className="display__details--closer">
              <b>Actors: </b>
              {Actors}
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="button button--display"
        onClick={addToList}
      >
        Add to list
      </button>
      <hr />
    </>
  );
};
