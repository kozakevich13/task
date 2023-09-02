import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExerciseSearchForm from "./components/ExerciseSearchForm";
import ExerciseResults from "./components/ExerciseResults";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<ExerciseSearchForm />} />
          <Route path="/results" element={<ExerciseResults />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
