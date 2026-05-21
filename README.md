# TypeScript Drag & Drop Application

This is a simple and dynamic task management application built with React, TypeScript, and the `@hello-pangea/dnd` library. It demonstrates list-based drag-and-drop functionality with reliable reordering logic.

---

## 🚀 Features

* **TypeScript Support:** Strongly typed core structures (`DropResult`, `Task[]`) ensuring type safety across the application.
* **Smooth Drag & Drop:** Integrated with `@hello-pangea/dnd`, a modern and well-maintained alternative to the legacy `react-beautiful-dnd`.
* **Optimized State Management:** Uses React's `useState` hook combined with efficient array splicing to update only the modified indexes without unnecessary overhead.

---

## 📁 Project Structure

The component architecture and directory layout are organized as follows:

```text
src/
├── components/
│   └── TaskList.tsx       # Droppable container component for the tasks
├── types/
│   └── Task.ts            # Type definitions for the Task object (id, text)
├── App.tsx                # Main entry component containing DragDropContext and handleDragEnd logic
└── main.tsx               # Application root render file
```
---

## 💡 How It Works
The core drag-and-drop mechanism is handled by the handleDragEnd function inside App.tsx. The reordering of array elements is safely managed through the following steps:

```text
const handleDragEnd = (result: DropResult) => {
  // If the item is dropped outside a valid destination, cancel the operation
  if (!result.destination) return;

  const items = [...tasks];
  
  // Remove the dragged item from its original index
  const [reorderedItem] = items.splice(result.source.index, 1);
  
  // Insert the item into its new destination index
  items.splice(result.destination.index, 0, reorderedItem);

  // Update the state
  setTasks(items);
};
```
