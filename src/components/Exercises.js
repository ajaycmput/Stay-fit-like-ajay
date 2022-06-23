import React, { useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import { WindowSharp } from '@mui/icons-material';

const Exercises = ( { exercises, setExercises, bodyPart}) => {
  const [currentPage, setcurrentPage] = useState(1);
  const exercisesPerPage = 9;

  /* Arithmetics for Paignation */
  const indexOfLastExercise = currentPage * 
  exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - 
  exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)

  const paginate = (e, value ) => {
    setcurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect (() => {
    const fetchExercisesData = async() => {
      let exercisesData = [];

        /* if the body part is set to all, fetch all the exercises from the Exercises.db API */
      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions);
        /* Or Else, fetch the particular exercise of that body type */
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exerciseOptions)
      }

      setExercises(exercisesData);  // set its state to new state
    }

    fetchExercisesData();
  }, [bodyPart])  // bodyPart is changing
  return (
    <Box id = "exercises"
      sx={{mt: { lg: '110px'}}}
      mt = "50px"
      p = "20px" 
      >
      
      <Typography variant = "h3" mb ="46px">
        Showing Results
      </Typography>
      <Stack direction= "row" sx = {{ gap: { lg: '110px', xs: ' 50px'}}}
      flexWrap = "wrap" justifyContent = "center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key= {index} exercise= 
          {exercise} />  //setExercises(exerciseData) changes and is set a new state, so we just put in the new exercise.
        ))}
      </Stack>
      <Stack mt= "100px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination
            color= "standard"
            shape= "rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length/ exercisesPerPage)}
            page = {currentPage}
            onChange={paginate}
            size="large"
            />
          )}
      </Stack>
    </Box>
  );
}

export default Exercises;
