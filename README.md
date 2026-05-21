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
