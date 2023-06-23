import './App.css';
// import Form from './components/Form';
import TodoList from './components/TodoList';
import User from './components/User';
import { Routes, Route,  BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User></User>}></Route>
      <Route path='/todos' element={<TodoList></TodoList>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
