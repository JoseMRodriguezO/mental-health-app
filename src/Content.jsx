import axios from "axios";
import { useState, useEffect } from "react";
import { JournalEntriesIndex } from "./JournalEntriesIndex";

export function Content() {
  const [journalEntries, setJournalEntries] = useState([]);

  const handleIndexJournalEntries = () => {
    console.log("handleIndexjournalEntries");
    axios.get("http://localhost:3000/journalEntries.json").then((response) => {
      console.log(response.data);
      setJournalEntries(response.data);
    });
  };

  +useEffect(handleIndexJournalEntries, []);

  return (
    <div>
      <JournalEntriesIndex users={journalEntries} />
    </div>
  );
}
