import {Route, Routes} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Error from './pages/Error'
import Logement from './pages/Logement'
import APropos from './pages/APropos'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'

function App() {

    return (

        <div>

            <Navbar/>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/logements/:id" element={<Logement/>} />
                <Route path="/APropos" element={<APropos/>} />
                <Route path="*" element={<Error/>} />

            </Routes>
            
            <Footer/>

        </div>
    );
}

export default App;