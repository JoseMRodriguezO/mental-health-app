export function JournalEntriesIndex(props) {
  return (
    <div>
      <h1>All Journal Entries</h1>
      {props.JournalEntries.map((journalEntry) => (
        <div>
          <h1>{journalEntry.title}</h1>
          <p>{journalEntry.content}</p>
          <p>{journalEntry.user_id}</p>
        </div>
      ))}
    </div>
  );
}
