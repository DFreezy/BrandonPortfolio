import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';  // Import Navbar
import Homepage from './pages/homePage';  // Import Homepage
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
    <ThemeProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
