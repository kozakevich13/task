import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ExerciseResults = () => {
  const exerciseResults = useSelector((state) => state.exerciseResults) || [];

  return (
    <div>
      <Typography variant="h5" component="h2">
        Search Results:
      </Typography>
      {exerciseResults.exerciseResults.length === 0 ? (
        <Typography variant="body1">There are no such exercises</Typography>
      ) : (
        <List>
          {exerciseResults.exerciseResults.map((exercise, index) => (
            <ListItem key={index}>
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
          ))}
        </List>
      )}
    </div>
  );
};

export default ExerciseResults;
