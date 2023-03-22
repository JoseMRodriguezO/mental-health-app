export function JournalEntriesShow(props) {
  const handleSubmit = (event) => {
    const params = new FormData(event.target);
    props.onUpdatePhoto(props.photo.id, params, () => event.target.reset());
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
    </div>
  );
}
