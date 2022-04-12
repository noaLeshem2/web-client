import './App.css';
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import User from './usersFolder/User';
import ChatingWith from './ChatingWith';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    /* {
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterPage />}></Route>
          <Route path='/LoginPage' element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter> } */


      <ChatPage  username={"inbal33"}/>

  );
}

export default App;
