export function JournalEntriesIndex(props) {
  return (
    <div>
      <h1>Mood Posts</h1>
      <div className="row" style={{ background: "lightblue", fontWeight: "bolder", fontSize: "1rem" }}>
        {props.journalEntries.map((journalEntry) => (
          <div key={journalEntry.id} className="col-sm-4">
            <div className="card" style={{ background: "lightgrey", fontWeight: "bolder", width: "250px" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "2rem" }}>
                  {journalEntry.title}
                </h5>

                <button className="btn btn-primary" onClick={() => props.onShowJournalEntry(journalEntry)}>
                  Full Story{" "}
                </button>
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
