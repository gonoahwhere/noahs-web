/* ===== IMPORTS ===== */
import { Routes, Route } from "react-router-dom";

/* ===== STYLES ===== */
import './styles/App.css';
import './styles/nav.css';
import './styles/footer.css';

/* ===== FILES ===== */
import Background from './components/Background.js'

/* ===== PAGES ===== */
import MainPage from './pages/MainPage.js'
import Toastoku from './pages/ToastokuPage.js'
import Projects from './pages/ProjectsPage.js'
import ToastokuDashboardPage from './pages/ToastokuDashboardPage.js'
import ErrorPage from './pages/404Page.js'

/* ===== PARTIALS ===== */
import Nav from "./partials/nav.js";
import Footer from "./partials/footer.js";

/* ===== DISPLAY ===== */
function App() {
    return (
        <div 
            className="App-layout"
            style={{
                background: '#0a0e27',
                color: '#ccc',
                fontFamily: 'Rubik, sans-serif',
                boxSizing: 'border-box',
                minHeight: '100vh',
                mnWidth: '100vw',
            }}
        >
            <Background />
            <Nav />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/toastoku" element={<Toastoku />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/toastoku/dashboard" element={<ToastokuDashboardPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
            <Footer startYear={2014} />
        </div>
    )
}

export default App;
