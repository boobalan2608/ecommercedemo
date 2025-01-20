import './App.css';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import AdminSignUp from './Components/AdminSignUp';
import UserSignUp from './Components/UserSignUp';
import AdminHome from './Components/AdminHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './Components/Error404';
import UserHome from './Components/UserHome';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/*' element={<Error/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/AdminSignup' element={<AdminSignUp/>}/>
        <Route path='/UserSignup' element={<UserSignUp/>}/>
        <Route path='/AdminHome/*' element={<AdminHome/>}/>
        <Route path='/UserHome/*' element={<UserHome/>}/>
      </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
