"use client"

import Grid from '@mui/material/Grid';
import { Meal } from '@/app/entities/Meal';
import CreateMealCard from './CreateMealCard';
import AdminMealCard from './AdminMealCard';

interface Props { meals : Meal[] }

const AdminMeals = ({meals}:Props) => {
    return (
        <Grid container padding={10} rowSpacing={3} spacing={8} columns={{ xs: 4, sm: 8, md: 12 }} > 

        <Grid item xs={4}>
            <CreateMealCard />
        </Grid> 

        {meals?.map(meal =>
        <Grid item xs={4} key={meal.id}>
            <AdminMealCard key={meal.id} meal={meal}/>
        </Grid>
        )}        
    </Grid> 
    )
}

export default AdminMeals