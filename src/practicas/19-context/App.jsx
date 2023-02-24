import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { ListProvider } from "./Contexts/ListContext";

const App = () => {
  return (
    <ListProvider>
      <TaskForm />
      <hr />
      <TaskList />
    </ListProvider>
  );
};

export default App;
