import { useState } from "react";
import './App.css';

import TaskArea from "./components/TasksArea";
import Task from "./components/Task";

export default function App() {
  const todos = [
    { id: 1 },
    { content: "Teste" },
  ];

  return (
    <>
      <Task />
    </>
  );
}