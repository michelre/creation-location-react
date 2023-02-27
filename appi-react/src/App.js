import {Routes ,Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Error from './pages/Error'
import Logement from './pages/Logement'
import APropos from './pages/APropos'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Footer from'./pages/Footer'
import image from './components/Image';

function App() {

    return (

        <div>

            <Navbar/>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/logements/:id" element={<Logement/>} />
                <Route path="/APropos" element={<APropos/>} />
                <Route path="/error" element={<Error/>} />

            </Routes>
            
            <Footer/>

        </div>
    );
}

export default App;