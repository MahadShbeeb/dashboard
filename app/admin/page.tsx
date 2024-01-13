import AdminMeals from '../components/admin/AdminMealsGrid';
import getMeals from '../hooks/useMeals';

const Admin = async () => {
    const meals=await getMeals();
    return (
    <AdminMeals meals={meals}/>
    )
}

export default Admin