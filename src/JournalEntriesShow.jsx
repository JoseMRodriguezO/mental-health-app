export function JournalEntriesShow(props) {
  return (
    <div>
      <h1>Journal information</h1>
      <p>Title: {props.journalEntry.title}</p>
      <p>Content: {props.journalEntry.content}</p>
      <p> UserID: {props.journalEntry.user_id}</p>
    </div>
  );
}
