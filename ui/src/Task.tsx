import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  status: string;
};

const queryClient = new QueryClient();

export function TaskForm() {
  const [title, setTitle] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("title", title);
    mutation.mutate({
      title,
    });
    setTitle("");
  }

  const mutation = useMutation({
    mutationFn: async (props: { title: string }) => {
      const response = await fetch("http://localhost:8080/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: props.title, status: "created" }),
      });
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[1000px] mx-auto flex flex-col items-center gap-y-4"
      >
        <input
          className="w-full px-4 py-2 border rounded"
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-400 color-white self-end"
        >
          Add Task
        </button>
      </form>
    </>
  );
}

export function TaskList() {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: async (): Promise<Task[]> => {
      const response = await fetch("http://localhost:8080/tasks");
      return response.json();
    },
  });
  return (
    <>
      <div className="w-full mx-auto max-w-[1000px] flex flex-col ">
        {query.data?.map((task) => (
          <div key={task.id} className="w-full px-4 py-2 border-b">
            {task.title}
          </div>
        ))}
      </div>
    </>
  );
}
