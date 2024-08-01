import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaskForm, TaskList } from "./Task";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <div className="p-4 flex-1 flex flex-col justify-center items-center">
        <div className="w-full">
          <QueryClientProvider client={queryClient}>
            <TaskForm />
            <TaskList />
          </QueryClientProvider>
        </div>
      </div>
      <footer className="mt-auto p-4 flex justify-center items-center">
        Footer
      </footer>
    </>
  );
}

export default App;
