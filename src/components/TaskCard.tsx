type Props = {
  text: string;
  provided: any;
};

function TaskCard({ text, provided }: Props) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        padding: "16px",
        marginBottom: "10px",
        background: "#646cff",
        color: "white",
        borderRadius: "8px",
        cursor: "grab",
        ...provided.draggableProps.style,
      }}
    >
      {text}
    </div>
  );
}

export default TaskCard;
