import './App.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div classname="Container-fluid">
      <div className="row">

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='/Register' element={<RegisterPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
