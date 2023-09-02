import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ExerciseResults = () => {
  const exerciseResults = useSelector((state) => state.exerciseResults) || [];
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Переходить назад на попередню сторінку
    navigate(-1);
  };

  return (
    <div>
      <Typography variant="h5" component="h2" sx={{ m: 1 }}>
        Search Results:
      </Typography>
      <Button variant="outlined" onClick={handleGoBack} sx={{ m: 1 }}>
        Back
      </Button>
      {exerciseResults.exerciseResults.length === 0 ? (
        <Typography variant="body1" sx={{ m: 1 }}>
          There are no such exercises
        </Typography>
      ) : (
        <List>
          {exerciseResults.exerciseResults.map((exercise, index) => (
            <Paper elevation={3} key={index} style={{ margin: "10px 0" }}>
              <ListItem>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <strong>name:</strong> {exercise.name}
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <strong>type:</strong> {exercise.type}
                      <br />
                      <strong>muscle:</strong> {exercise.muscle}
                      <br />
                      <strong>instructions:</strong>
                      <Typography variant="body2">
                        {exercise.instructions}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Paper>
          ))}
        </List>
      )}
    </div>
  );
};

export default ExerciseResults;
