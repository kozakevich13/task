import React from "react";
import { useSelector } from "react-redux";

const ExerciseResults = () => {
  const exerciseResults = useSelector((state) => state.exerciseResults) || [];
  console.log(exerciseResults.exerciseResults);
  return (
    <div>
      <h2>Результати пошуку:</h2>
      <ul>
        {exerciseResults.exerciseResults.map((exercise, index) => (
          <li key={index}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseResults;
