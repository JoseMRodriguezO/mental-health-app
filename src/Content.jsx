import axios from "axios";
import { useState, useEffect } from "react";
import { JournalEntriesIndex } from "./JournalEntriesIndex";
import { JournalEntriesNew } from "./JournalEntriesNew";
import { Modal } from "./Modal";
import { JournalEntriesShow } from "./JournalEntriesShow";

export function Content() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [isJournalEntriesShowVisible, setIsJournalEntriesShowvisible] = useState(false);
  const [currentJournalEntry, setCurrentJournalEntry] = useState({});

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
  const handleShowJournalEntry = (journalEntry) => {
    console.log("handleShowJournalEntry", journalEntry);
    setIsJournalEntriesShowvisible(true);
    setCurrentJournalEntry(journalEntry);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsJournalEntriesShowvisible(false);
  };

  useEffect(handleIndexJournalEntries, []);

  return (
    <div>
      <JournalEntriesNew onCreateJournalEntry={handleCreateJournalEntry} />
      <JournalEntriesIndex journalEntries={journalEntries} onShowJournalEntry={handleShowJournalEntry} />
      <Modal show={isJournalEntriesShowVisible} onClose={handleClose}>
        <JournalEntriesShow journalEntry={setCurrentJournalEntry} />
      </Modal>
    </div>
  );
}
