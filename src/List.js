import { useContext } from "react";

export const List = (props) => {
  const { listState, setListState } = useContext(props.listContext);

  if (listState.length === 0) {
    return <></>;
  }

  const removeMovie = (movieTitle) => {
    setListState(() => {
      return listState.filter((movie) => {
        return movie.Title !== movieTitle;
      });
    });
  };

  const resetList = () => {
    setListState([]);
  };

  return (
    <>
      <section className="list">
        <h2 className="list__header">Your List</h2>
        {listState.map((movie) => {
          let key = movie.Title.replaceAll(" ", "");
          return (
            <div className="display display--list" key={key}>
              <div className="display__poster display__poster--list">
                <img
                  src={movie.Poster}
                  alt={movie.Title + " poster image"}
                  style={{ height: "60px" }}
                />
              </div>
              <div className="display__text display__text--list">
                <div className="display__header">
                  <h2 className="display__headerItem--title">{movie.Title}</h2>
                  <p className="display__headerItem--genre">
                    {movie.Year}
                    <b> | </b>
                    {movie.Runtime}
                    <b> | </b>
                    {movie.Genre}
                  </p>
                </div>
              </div>
              <div className="list__options">
                <button
                  type="button"
                  className="button--list"
                  title="Remove this movie from the list"
                  aria-label="Remove this movie from the list"
                  onClick={() => {
                    removeMovie(movie.Title);
                  }}
                >
                  <span
                    className="material-icons button--listSpan notranslate"
                    role="img"
                    aria-hidden="true"
                  >
                    delete
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <button type="button" className="button" onClick={resetList}>
        Reset List
      </button>
    </>
  );
};
