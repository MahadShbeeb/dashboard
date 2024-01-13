import getMeals from '../hooks/useMeals';
import Grid from '@mui/material/Grid';
import AdminMealCard from '../components/admin/AdminMealCard';
import CreateMealCard from '../components/admin/CreateMealCard';

const Admin = async () => {
    const meals=await getMeals();
    return (

<Grid container padding={10} rowSpacing={3} spacing={8} 
    columns={{ xs: 4, sm: 8, md: 12 }} > 

        <Grid container item xs={4}>
            <CreateMealCard />
        </Grid> 

        {meals?.map(meal =>
        <Grid container item xs={4} key={meal.id}>
            <AdminMealCard key={meal.id} meal={meal}/>
        </Grid>)}        
    </Grid> 
    )
}

export default Admin