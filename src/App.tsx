import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import About from './pages/About';
import Home from "./pages/Home";
import Project from './pages/Project';
import PDFViewer from 'pdf-viewer-reactjs';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<PDFViewer
            document={{
              url: process.env.PUBLIC_URL + "/pdf/AnhVu_Resume.pdf"
            }}
          />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
