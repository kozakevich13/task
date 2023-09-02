import React, { useState } from "react";
import axios from "axios";

const ExerciseSearchForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    muscle: "",
    difficulty: "",
  });

  const [exercises, setExercises] = useState([]);

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
      "X-Api-Key": `kGCqBTotFOMHT6qzhemueg==uZGVrDOjK80Cn1M6`,
    };

    axios
      .get("https://api.api-ninjas.com/v1/exercises", {
        params,
        headers,
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setExercises(response.data);
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

  return (
    <div>
      <label>Назва:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <label>Тип:</label>
      <select name="type" value={formData.type} onChange={handleInputChange}>
        {typeOptions.map((typeOption) => (
          <option key={typeOption} value={typeOption}>
            {typeOption}
          </option>
        ))}
      </select>

      <label>М'яз:</label>
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

      <label>Складність:</label>
      <select
        name="difficulty"
        value={formData.difficulty}
        onChange={handleInputChange}
      >
        <option value="">Виберіть складність</option>
        <option value="beginner">Початківець</option>
        <option value="intermediate">Середній</option>
        <option value="expert">Експерт</option>
      </select>

      <button onClick={handleSearch}>Пошук</button>

      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <strong>Назва:</strong> {exercise.name}
            <br />
            <strong>Тип:</strong> {exercise.type}
            <br />
            <strong>М'яз:</strong> {exercise.muscle}
            <br />
            <strong>Інструкції:</strong>
            <p>{exercise.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseSearchForm;
