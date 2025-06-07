import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CardsPage from './Pages/CardsPage.jsx';
import './App.css'
import Services from "./Pages/Services.jsx";
import About from "./Pages/About.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/components/:id" element={<CardsPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;