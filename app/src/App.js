import './App.css';
import Help from './Help';
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
          <Route path='/' element={<LoginPage />}/>
          <Route path='/RegisterPage' element={<RegisterPage />}/>
          <Route path='/ChatPage' element={<ChatPage />}> </Route>
        </Routes>
      </BrowserRouter> } */


      <ChatPage  username={"noale10"}/>
      //<Help username={"inbal33"}></Help>

  );
}

export default App;
