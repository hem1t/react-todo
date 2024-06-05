import { Route, Routes } from 'react-router-dom';
import { TodoPage } from './pages/TodoPage';
import { CreateTodo } from './pages/todo_creator/CreateTodo';

const App = () => {
  return (
    <>
    <div className='flex flex-col items-center h-full'>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/add_todo" element={<CreateTodo />} />
      </Routes>
    </div>
    </>
  );
};

export default App