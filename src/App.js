import './App.css'
import AuthDecider from './AuthDecider/AuthDecider';
import{ BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './Home';
import EmergencyForm from './Emergency/EmergencyForm';
import ViolationForm from './Violation/ViolationForm';
import Navbar from './NavBar/NavBar';


function App() {
    return (
        // <div className="App">
        //    <Form />
        // </div>

        <>

        <Router>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/violationForm' element={<ViolationForm/>}></Route>
                <Route path='/emergencyForm' element={<EmergencyForm/>}></Route>
            </Routes>
        </Router>
        </>
    );
}

export default App;
