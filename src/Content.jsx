import axios from "axios";
import { useState, useEffect } from "react";
import { JournalEntriesIndex } from "./JournalEntriesIndex";
import { JournalEntriesNew } from "./JournalEntriesNew";
import { Modal } from "./Modal";
import { JournalEntriesShow } from "./JournalEntriesShow";
import { MoodsNew } from "./MoodsNew";
import { Signup } from "./Signup";
import { Login } from "../Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function Content() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [isJournalEntriesShowVisible, setIsJournalEntriesShowvisible] = useState(false);
  const [currentJournalEntry, setCurrentJournalEntry] = useState({});
  const [moods, setMoods] = useState([]);
  const [value, defaultview, onChange] = useState(new Date());

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
      successCallback();
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

  const handleCreateMood = (params, successCallback) => {
    console.log("handleCreateMood", params);
    axios.post("http://localhost:3000/moods.json", params).then((response) => {
      setMoods([...moods, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexJournalEntries, []);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/journal_entries/new"
          element={<JournalEntriesNew onCreateJournalEntry={handleCreateJournalEntry} />}
        />
        <Route
          path="/journal_entries"
          element={<JournalEntriesIndex journalEntries={journalEntries} onShowJournalEntry={handleShowJournalEntry} />}
        />
        <Route path="/Moods/new" element={<MoodsNew onCreateMood={handleCreateMood} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Modal show={isJournalEntriesShowVisible} onClose={handleClose}>
        <JournalEntriesShow journalEntry={setCurrentJournalEntry} />
      </Modal>
      <Calendar />

      <LogoutLink />
    </div>
  );
}
