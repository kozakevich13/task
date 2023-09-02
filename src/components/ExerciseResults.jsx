import React from "react";
import { useSelector } from "react-redux";

const ExerciseResults = () => {
  const exerciseResults = useSelector((state) => state.exerciseResults) || [];
  console.log(exerciseResults.exerciseResults);
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {exerciseResults.exerciseResults.map((exercise, index) => (
          <li key={index}>
            <li key={index}>
              <strong>name:</strong> {exercise.name}
              <br />
              <strong>type:</strong> {exercise.type}
              <br />
              <strong>muscle:</strong> {exercise.muscle}
              <br />
              <strong>instructions:</strong>
              <p>{exercise.instructions}</p>
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseResults;
