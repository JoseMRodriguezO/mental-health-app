import React from "react";
import ReactPlayer from "react-player";
export function JournalEntriesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateJournalEntry(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Post Entry </h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Content: <input name="content" type="text" />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post Entry
        </button>
      </form>
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" controls={true} width="480px" height="270px" />
    </div>
  );
}
