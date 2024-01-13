import React from 'react'
import getMeals from '../hooks/useMeals';
import MealCard from '../components/meals/MealCard';
import Grid from '@mui/material/Grid';
import { Backdrop, CircularProgress } from '@mui/material';


const Meals = async () => {
    const meals=await getMeals();
    return (
    <Grid container padding={10} rowSpacing={3} spacing={8} columns={{ xs: 4, sm: 8, md: 12 }} >  
        {/* {isLoading &&  
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        >
        <CircularProgress color="inherit" />
        </Backdrop> */}
      {/* }    */}
        {meals?.map(meal =>
        <Grid item xs={4} key={meal.id}>
            <MealCard key={meal.id} meal={meal}/>
            </Grid>
        )}
        </Grid> 
    )
}

export default Meals