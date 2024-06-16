import { Route, Routes } from "react-router-dom";
import { MainPage } from "./page_views/MainPage";
import { CreateTodo } from "./page_views/CreateTodoPage";

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add_todo" element={<CreateTodo />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
