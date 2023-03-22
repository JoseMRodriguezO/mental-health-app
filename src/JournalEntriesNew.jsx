export function JournalEntriesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateJournalEntry(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Journal Entry </h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Content: <input name="content" type="text" />
        </div>
        <div>
          User ID: <input name="user_id" type="text" />
        </div>
        <button type="submit">Create Journal Entry</button>
      </form>
    </div>
  );
}
