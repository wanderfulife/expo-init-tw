import React, { useState, useEffect } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";

export default function AppState() {
  const [allNotes, setAllNotes] = useState([
    {
      noteId: 1,
      noteTitle: "First Idea",
      noteText: "This is my first startup idea",
    },
    {
      noteId: 2,
      noteTitle: "Second Idea ",
      noteText: "This is my second startup idea",
    },
  ]);
  const [note, setNote] = useState({});

  const AppState = {
	allNotes,
	setAllNotes,
	note,
	setNote
  }

  return <AppNavigation AppState={AppState}/>;
}
