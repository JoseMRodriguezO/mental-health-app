import React from "react";

export function JournalEntriesIndex(props) {
  return (
    <div>
      <h1>Mood Posts</h1>
      <div className="row">
        {props.journalEntries.map((journalEntry) => (
          <div key={journalEntry.id} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{journalEntry.title}</h5>

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
