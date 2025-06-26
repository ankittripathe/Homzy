import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div>
                <div className="white-gradient" />
                <Hero />
            </div>
            <Companies />
            <Residencies />
            <Value />
            <Contact />
            <GetStarted />
            <Footer />
        </div>
    );
}

export default App;
