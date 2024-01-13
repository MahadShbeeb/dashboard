import Image from 'next/image'
import foodImage from './assets/images/food.jpg'
import { Box, Grid } from '@mui/material';

export default function Home() {
  return (
  <Grid>
    <Grid item >
      <Image src={foodImage} width={0} height={0} objectFit='cover'
      style={{width: '100%', height: '100%',position:'relative'}} alt ="bg"/>
    </Grid>
  </Grid>
  );
}