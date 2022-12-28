
import './App.css';
import HeaderCom from './components/header';
import {Route, Routes} from "react-router-dom"
import LoginPage from './components/login';
import SignInPage from './components/signin';
import UsersPage from './components/users';
function App() {
  return (
    <div className="App">
      <HeaderCom></HeaderCom>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
