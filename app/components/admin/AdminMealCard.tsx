import { Meal } from '../../entities/Meal';
import {  Box, Card,CardActions,CardContent, CardMedia, Divider, Typography } from '@mui/material'
import Link from 'next/link';
import EditButton from './EditButton';

interface Props{ meal :Meal }

const AdminMealCard = ({meal}:Props) => {
    return (
    <Card sx={{ maxWidth: 345,borderRadius:'10px'}} >
    <CardMedia component="img" image={meal.image} height ='200px'/>
    <Divider orientation="horizontal" flexItem />
    <CardContent >
        <Link href={'/meals/'+meal.id}  style={{  textDecoration: 'none'}}>
            {meal.title.split(' ').slice(0,3).join(" ")}...
        </Link>
        <Box marginTop={1}>
            <Typography variant="body2" color="text.secondary">{meal.category}</Typography>
        </Box>
    </CardContent>
    <CardActions style={{justifyContent: 'center'}}>
        <Box >
            <EditButton id={meal.id}/>
        </Box>
    </CardActions>
    </Card>
    )
}

export default AdminMealCard