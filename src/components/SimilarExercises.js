import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
  console.log(targetMuscleExercises);
  return (
    <Box sx = {{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant = "h3" mb = {5}> Exercises that target the same muscle group </Typography>
      <Stack direction = "row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ?
         <HorizontalScrollbar data = {targetMuscleExercises} />  //re-use the Horizontal componenet this time.
          : <Loader />}
      </Stack>
      <Typography variant = "h3" mb = {5}> Exercises that use the same Equipment </Typography>
      <Stack direction = "row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ?
         <HorizontalScrollbar data = {equipmentExercises} />  //re-use the Horizontal componenet this time.
          : <Loader />}
  
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
