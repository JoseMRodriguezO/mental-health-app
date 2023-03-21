export function JournalEntriesNew() {
  return (
    <div>
      <h1>New Journal Entry </h1>
      <form>
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
