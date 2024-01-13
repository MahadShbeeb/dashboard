import { Box, Card } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Link from 'next/link'

const CreateMealCard = () => {
    return (
        <Card style={{ display:'flex', justifyContent:'center' ,backgroundColor: '#e5e7eb'}}
        sx={{ width: 345 , height:330 , borderRadius:'10px'}} >
            <Box sx={{ display: "flex", color: "white" ,alignItems:'center'}}>
                <Link href="/admin/create" >
                    <AddRoundedIcon sx={{fontSize: 80,strokeWidth: "2",stroke: "white"}}/>
                </Link>
            </Box>
        </Card>
    )
}

export default CreateMealCard