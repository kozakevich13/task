import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExerciseSearchForm from "./components/ExerciseSearchForm";
import ExerciseResults from "./components/ExerciseResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ExerciseSearchForm />} />
        <Route path="/results" element={<ExerciseResults />} />
      </Routes>
    </Router>
  );
}

export default App;
