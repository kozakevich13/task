import React from "react";

const ExerciseResults = ({ exercises }) => {
  return (
    <div>
      <h2>Результати пошуку:</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {/* Виводьте інформацію про вправи, як ви робили раніше */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseResults;
