import { useState, useMemo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { Column, Id, Task } from "../types/types";
import { CSS } from "@dnd-kit/utilities";
import { TaskCard } from "./TaskCard";
import { SortableContext } from "@dnd-kit/sortable";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

export const ColumnContainer = (props: Props) => {
  const {
    column,
    tasks,
    deleteColumn,
    updateColumn,
    createTask,
    deleteTask,
    updateTask,
  } = props;

  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="from-slate-50 bg-gradient-t-b to-slate-300 opacity-40 rounded-md shadow-sm p-4 w-full min-w-[300px] max-w-xs h-[146px] flex flex-col border-2"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-slate-100 rounded-lg shadow-sm p-2 w-full min-w-[300px] max-w-xs h-full "
    >
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className="flex items-center justify-between relative"
      >
        <h2 className="text-sm font-medium px-2 text-slate-900 min-h-[32px] flex items-center">
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-white focus:border-blue-500 border-0 absolute top-0 left-0 pl-2 rounded-md min-h-[32px]"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-red-500 opacity-0 hover:opacity-100 transition-all w-5 h-5"
          onClick={() => {
            deleteColumn(column.id);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>

      <SortableContext items={tasksIds}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </SortableContext>

      <div className="mt-4">
        <button
          className="text-slate-500 flex items-center font-medium gap-2 hover:bg-gray-200 px-1 py-2 w-full rounded-md text-sm"
          onClick={() => {
            createTask(column.id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add a card
        </button>
      </div>
    </div>
  );
};
