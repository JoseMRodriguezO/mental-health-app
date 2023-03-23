export function JournalEntriesShow(props) {
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
        <div>
          <input defaultValue={props.journalEntry.content} name="content" className="form-control" type="text"></input>
        </div>
        <button className="" type="submit">
          Edit
        </button>
      </form>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
