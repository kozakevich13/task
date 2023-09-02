import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setExerciseResults } from "../redux/actions";
import { useDispatch } from "react-redux";
import { API_KEY } from "../apiConfig";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

const ExerciseSearchForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    muscle: "",
    difficulty: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const muscleOptions = {
    "": "Choose a muscle",
    abdominals: "Abdominals",
    abductors: "Abductors",
    adductors: "Adductors",
    biceps: "Biceps",
    calves: "Calves",
    chest: "Chest",
    forearms: "Forearms",
    glutes: "Gutes",
    hamstrings: "Hamstrings",
    lats: "Lats",
    lower_back: "Lower back",
    middle_back: "Middle back",
    neck: "Neck",
    quadriceps: "Quadriceps",
    traps: "Traps",
    triceps: "Triceps",
  };

  const typeOptions = {
    "": "Choose a type",
    cardio: "Cardio",
    olympic_weightlifting: "Olympic weightlifting",
    plyometrics: "Plyometrics",
    powerlifting: "Powerlifting",
    strength: "Strength",
    stretching: "Stretching",
    strongman: "Strongman",
  };

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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <form>
        <TextField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          sx={{ minWidth: 200, m: 1 }}
        />

        <FormControl sx={{ minWidth: 200, m: 1 }}>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            label="Type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            {Object.entries(typeOptions).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200, m: 1 }}>
          <InputLabel id="muscle-label">Muscle</InputLabel>
          <Select
            labelId="muscle-label"
            label="Muscle"
            name="muscle"
            value={formData.muscle}
            onChange={handleInputChange}
          >
            {Object.entries(muscleOptions).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200, m: 1 }}>
          <InputLabel id="difficulty-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-label"
            label="Difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          >
            <MenuItem value="">Select the difficulty</MenuItem>
            <MenuItem value="beginner">beginner</MenuItem>
            <MenuItem value="intermediate">intermediate</MenuItem>
            <MenuItem value="expert">expert</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          sx={{ minWidth: 200, minHeight: 55, mt: 1 }}
          onClick={handleSearch}
          disabled={isFormEmpty}
        >
          Search
        </Button>
      </form>
    </Box>
  );
};

export default ExerciseSearchForm;
