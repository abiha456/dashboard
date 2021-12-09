import Admin from './components/Admin/Admin';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import {
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

export default App;
