import axios from "axios";
import { useState, useEffect } from "react";
import { JournalEntriesIndex } from "./JournalEntriesIndex";
import { JournalEntriesNew } from "./JournalEntriesNew";
import { Modal } from "./Modal";

export function Content() {
  const [journalEntries, setJournalEntries] = useState([]);

  const handleIndexJournalEntries = () => {
    console.log("handleIndexjournalEntries");
    axios.get("http://localhost:3000/journal_entries.json").then((response) => {
      console.log(response.data);
      setJournalEntries(response.data);
    });
  };

  const handleCreateJournalEntry = (params, successCallback) => {
    console.log("handleCreateJournalEntry", params);
    axios.post("http://localhost:3000/journal_entries.json", params).then((response) => {
      setJournalEntries([...journalEntries, response.data]);
    });
  };

  useEffect(handleIndexJournalEntries, []);

  return (
    <div>
      <JournalEntriesNew onCreateJournalEntry={handleCreateJournalEntry} />
      <JournalEntriesIndex journalEntries={journalEntries} />
      <Modal show={true}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
