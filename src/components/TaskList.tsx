import { Droppable, Draggable } from "@hello-pangea/dnd";

import type { Task } from "../types/Task";

import TaskCard from "./TaskCard";

type Props = {
  tasks: Task[];
};

function TaskList({ tasks }: Props) {
  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => <TaskCard text={task.text} provided={provided} />}
            </Draggable>
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TaskList;
