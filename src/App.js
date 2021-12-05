import Admin from './components/Admin/Admin';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import './assets/css/style.css';
import {Routes, Route } from 'react-router-dom';

function App() {

  // var retrieve = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      {/* <Route path="/" >{retrieve != null ? <Redirect to="/admin" /> : <Admin />}</Route> */}
    </Routes>
  );
}

export default App;
