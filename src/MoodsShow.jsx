export function MoodsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateJournalEntry(props.journalEntry.id, params, () => event.target.reset());
  };
  return (
    <div>
      <p>{props.mood.type}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input defaultValue={props.mood.type} name="content" className="form-control" type="text"></input>
        </div>
      </form>
    </div>
  );
}
// fix this with the new. cheat
