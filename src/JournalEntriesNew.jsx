export function JournalEntriesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.omCreateJournalEntry(params, () => event.target.target.reset());
  };

  return (
    <div>
      <h1>New Journal Entry </h1>
      <form onSubmit={handleSubmit}>
        <div>
          UserID: <input user_id="user_id" type="text" />
        </div>
        <div>
          Title: <input title="title" type="text" />
        </div>
        <div>
          Content: <input content="content" type="text" />
        </div>
        <button type="submit">Create Journal Entry</button>
      </form>
    </div>
  );
}
