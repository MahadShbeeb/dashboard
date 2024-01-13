import React from 'react'
import { Meal } from '../../entities/Meal';
import {  Box, Card,CardContent, CardMedia, Divider, Typography } from '@mui/material'
import Link from 'next/link';

interface Props{
    meal :Meal
}

const MealCard = ({meal}:Props) => {
  return (
    <Card sx={{ maxWidth: 345,borderRadius:'10px'}} >
    <CardMedia component="img" image={meal.image} height ='200px'
    />

    <Divider orientation="horizontal" flexItem />

    <CardContent >
        <Link href={'/meals/'+meal.id}  style={{  textDecoration: 'none'}}>
            {meal.title.split(' ').slice(0,4).join(" ")}...
        </Link>
        <Box marginTop={1}>
            <Typography variant="body2" color="text.secondary">{meal.category}</Typography>
        </Box>
    </CardContent>
    </Card>
    )
}

export default MealCard