import axios from "axios";
import { useState, useEffect } from "react";
import { JournalEntriesIndex } from "./JournalEntriesIndex";
import { JournalEntriesNew } from "./JournalEntriesNew";
import { Modal } from "./Modal";
import { JournalEntriesShow } from "./JournalEntriesShow";
import { MoodsNew } from "./MoodsNew";
import { Signup } from "./Signup";
import { Login } from "../Login";
import { Routes, Route } from "react-router-dom";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MoodsShow } from "./MoodsShow";
export function Content() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [isJournalEntriesShowVisible, setIsJournalEntriesShowvisible] = useState(false);
  const [currentJournalEntry, setCurrentJournalEntry] = useState({});
  const [moods, setMoods] = useState([]);
  const [value, defaultview, onChange] = useState(new Date());
  const [isMoodsShowVisible, setIsMoodsShowVisible] = useState(false);
  const [currentMood, setCurrentMood] = useState({});

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
  const handleShowMood = (mood) => {
    console.log("handleShowMood", mood);
    setIsMoodsShowVisible(true);
    setCurrentMood(mood);
  };

  const handleUpdateJournalEntry = (id, params, successCallback) => {
    console.log("handleUpdateJournalEntry", params);
    axios.patch(`http://localhost:3000/journal_entries/${id}.json`, params).then((response) => {
      setJournalEntries(
        journalEntries.map((journalEntry) => {
          if (journalEntry.id === response.data.id) {
            return response.data;
          } else {
            return journalEntry;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  useEffect(handleIndexJournalEntries, []);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/journal_entries"
          element={<JournalEntriesIndex journalEntries={journalEntries} onShowJournalEntry={handleShowJournalEntry} />}
        />
        <Route
          path="/journal_entries/new"
          element={<JournalEntriesNew onCreateJournalEntry={handleCreateJournalEntry} />}
        />
        <Route path="/Moods/new" element={<MoodsNew onCreateMood={handleCreateMood} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Modal show={isJournalEntriesShowVisible} onClose={handleClose}>
        <JournalEntriesShow
          journalEntry={currentJournalEntry}
          onUpdateJournalEntry={handleUpdateJournalEntry}
          show={isMoodsShowVisible}
        />
      </Modal>
      <Calendar />
    </div>
  );
}
