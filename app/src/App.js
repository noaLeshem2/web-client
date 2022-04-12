import './App.css';
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import User from './usersFolder/User';
import ChatingWith from './ChatingWith';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/RegisterPage' element={<RegisterPage />}/>
          <Route path='/ChatPage' element={<ChatPage />}> </Route>
        </Routes>
      </BrowserRouter>
      //<RegisterPage></RegisterPage>

  );
}

export default App;
