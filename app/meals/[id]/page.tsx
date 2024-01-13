import getMeal from "@/app/hooks/useMeal"
import { Box, Button, Divider, Grid, Typography } from '@mui/material'

const MealDetails = async({ params }: { params: { id: number } }) => {
    const meal = await getMeal(params.id)
    return (
    <Grid container  columns={16}>
    <Grid item xs={16} sm={16} md={4} lg={4}>
    <Box component="img" sx={{
        border: 0 ,
        height: "700px",
        width: "100%",
        backgroundImage: `url(${meal?.image})` ,
        backgroundPosition: 'right bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
    </Box>
  </Grid>


  <Grid item xs={16} sm={16} md={12} lg={12}>
    <Box padding={10} textAlign='start'>
      <Typography  variant="h4" color='gray.800'
        sx={{ textDecoration: 'none',textDecorationColor:'gray.900',my: '2rem'  }}>
        {meal?.title}
        </Typography>
         <Typography  color="text" sx={{ my: '1rem' }}>
          {meal?.category}
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography sx={{ my: '1rem' }}>
          Mael Description :
        </Typography>
        <Typography  color="text.secondary" sx={{ my: '1rem' }}>
          {meal?.description}
        </Typography>         
        {/* <IconButton onClick={()=>setIsFav(!isFav)}>
          {!isFav?<FavoriteBorderOutlinedIcon /> :<FavoriteIcon/>}
          </IconButton> */}
    </Box>
  </Grid>
</Grid>
    )
}

export default MealDetails