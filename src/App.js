import { BrowserRouter as Router,Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";

import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import ProjectEdit from "./components/pages/ProjectEdit";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}/>
        
          <Route path="/company" element={<Company />}/>
            
          <Route path="/projects" element={<Projects />} />
            
          <Route path="/newproject" element={<NewProject />}/>

          <Route path="/project/:id" element={<ProjectEdit />}/>
          
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
