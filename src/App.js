import './App.css';
import { AuthProvider } from './components/Context';
// import Form from './components/Form';
import TodoList from './components/TodoList';
import User from './components/User';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User></User>}></Route>
      <Route path='/todos' element={<TodoList></TodoList>}></Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
