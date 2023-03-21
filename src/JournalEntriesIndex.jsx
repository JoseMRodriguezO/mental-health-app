export function JournalEntriesIndex(props) {
  return (
    <div>
      <h1>All Journal Entries</h1>

      {props.journalEntries.map((journalEntry) => (
        <div key={journalEntry.id}>
          <h1>{journalEntry.title}</h1>
          <p>{journalEntry.content}</p>
          <p>{journalEntry.user_id}</p>
          <p>hello</p>
        </div>
      ))}
    </div>
  );
}
