import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setExerciseResults } from "../redux/actions";
import { useDispatch } from "react-redux";
import { API_KEY } from "./apiConfig";

const ExerciseSearchForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    muscle: "",
    difficulty: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const muscleOptions = [
    "",
    "abdominals",
    "abductors",
    "adductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps",
  ];

  const typeOptions = [
    "",
    "cardio",
    "olympic_weightlifting",
    "plyometrics",
    "powerlifting",
    "strength",
    "stretching",
    "strongman",
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    const params = {
      name: formData.name,
      type: formData.type,
      muscle: formData.muscle,
      difficulty: formData.difficulty,
      offset: 0,
    };

    const headers = {
      "X-Api-Key": API_KEY,
    };

    axios
      .get("https://api.api-ninjas.com/v1/exercises", {
        params,
        headers,
      })
      .then((response) => {
        dispatch(setExerciseResults(response.data));
        navigate("/results");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Помилка від сервера:", error.response.data);
        } else if (error.request) {
          console.error("Помилка мережі:", error.message);
        } else {
          console.error("Інша помилка:", error.message);
        }
      });
  };
  const isFormEmpty = Object.values(formData).every((val) => val === "");
  return (
    <div>
      <label>name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <label>type:</label>
      <select name="type" value={formData.type} onChange={handleInputChange}>
        {typeOptions.map((typeOption) => (
          <option key={typeOption} value={typeOption}>
            {typeOption}
          </option>
        ))}
      </select>

      <label>muscle:</label>
      <select
        name="muscle"
        value={formData.muscle}
        onChange={handleInputChange}
      >
        {muscleOptions.map((muscleOption) => (
          <option key={muscleOption} value={muscleOption}>
            {muscleOption}
          </option>
        ))}
      </select>

      <label>difficulty:</label>
      <select
        name="difficulty"
        value={formData.difficulty}
        onChange={handleInputChange}
      >
        <option value="">Select the difficulty</option>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="expert">expert</option>
      </select>

      <button onClick={handleSearch} disabled={isFormEmpty}>
        search
      </button>
    </div>
  );
};

export default ExerciseSearchForm;
