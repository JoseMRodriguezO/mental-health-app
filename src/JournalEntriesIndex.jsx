export function JournalEntriesIndex(props) {
  return (
    <div>
      <h1>All Journal Entries</h1>
      <div className="row">
        {props.journalEntries.map((journalEntry) => (
          <div key={journalEntry.id} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{journalEntry.title}</h5>
                <p className="card-text"> {journalEntry.content}</p>
                <button onClick={() => props.onShowJournalEntry(journalEntry)}>Full Story </button>
                <a href="#"> </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//       {props.journalEntries.map((journalEntry) => (
//         <div key={journalEntry.id}>
//           <h1>{journalEntry.title}</h1>
//           <button onClick={() => props.onShowJournalEntry(journalEntry)}>Full Story</button>
//         </div>
//       ))}
//     </div>
//   );
// }
