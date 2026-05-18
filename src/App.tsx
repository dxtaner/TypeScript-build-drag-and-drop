import { useState } from "react";

import { DragDropContext } from "@hello-pangea/dnd";

import type { DropResult } from "@hello-pangea/dnd";

import type { Task } from "./types/Task";

import TaskList from "./components/TaskList";

const initialTasks: Task[] = [
  { id: "1", text: "React Öğren" },
  { id: "2", text: "TypeScript Çalış" },
  { id: "3", text: "Drag and Drop Yap" },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = [...tasks];

    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
      }}
    >
      <h1>TypeScript Drag & Drop</h1>

      <DragDropContext onDragEnd={handleDragEnd}>
        <TaskList tasks={tasks} />
      </DragDropContext>
    </div>
  );
}

export default App;
