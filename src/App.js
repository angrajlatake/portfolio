import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import ProjectsList from "./Components/ProjectsList";
import BlogsList from "./Components/BlogsList";
import ProjectEditor from "./Components/ProjectsList/ProjectEditor";
import ProjectPage from "./Components/ProjectPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Studio />}>
          <Route path="projects" element={<ProjectPage />}>
            <Route index element={<ProjectsList />} />
            <Route path=":projectId" element={<ProjectEditor />} />
          </Route>
          <Route path="blog" element={<BlogsList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
