import './App.css'
import AuthDecider from './AuthDecider/AuthDecider';
import{ BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './Home';
import EmergencyForm from './Emergency/EmergencyForm';
import ViolationForm from './Violation/ViolationForm';
import Navbar from './NavBar/NavBar';
import Footer from './Footer';
import AllProductsAdminDetails from './AllProductsAdminDetails';
import { useState } from 'react';


function App() {
    const [user,setUser] = useState(null);
    return (
       


        <>
        <Router>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/violationForm' element={<ViolationForm/>}></Route>
                <Route path='/emergencyForm' element={<EmergencyForm/>}></Route>
                <Route path='/auth' element={<AuthDecider user={user} setUser={setUser}/>}></Route>
                <Route path='/allrequests' element={<AllProductsAdminDetails/>}></Route>
            </Routes>
            <Footer/>
        </Router>
        </>
    );
}

export default App;
