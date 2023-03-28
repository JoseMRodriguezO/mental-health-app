export function JournalEntriesShow(props) {
  const ishandleClick = () => {
    window.location.href = "https://www.betterhelp.com";
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateJournalEntry(props.journalEntry.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyJournalEntry(props.journalEntry);
  };

  return (
    <div>
      <p>{props.journalEntry.content}</p>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <input defaultValue={props.journalEntry.content} name="content" className="form-control" type="text"></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Edit
        </button>
      </form>
      <button className="btn btn-primary" onClick={handleClick}>
        Delete
      </button>
      <div>
        <button className="btn btn-primary" onClick={ishandleClick}>
          Visit BetterHelp
        </button>
      </div>
    </div>
  );
}
