"use client"

import React, { FormEvent, useState } from 'react'
import { Box, Button, Container, CssBaseline, Divider, Stack, TextField, Typography } from '@mui/material';
import { Meal } from '../../entities/Meal';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Spinner from '../Spinner';

interface Props {  meal : Meal  }

const AdminForm = ({ meal }:Props) => {
  const router=useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      setSubmitting(true);
      event.preventDefault();
      await axios.put(
        'https://654e4e21cbc325355742b673.mockapi.io/meals/'+meal.id,{
        title,description,image,category
      });     
      setSubmitting(false);
      router.push('/admin')
  }

  const handelDelete = async () => {
      setDeleting(true)
      await axios.delete(
        'https://654e4e21cbc325355742b673.mockapi.io/meals/'+meal.id);
      router.push('/admin')
      setDeleting(false)
  }

  const [title, setTitle] = useState(meal.title);
  const [description, setDescription] = useState(meal.description);
  const [image, setImage] = useState(meal.image);
  const [category, setCategory] = useState(meal.category);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  return (
    <Container >
      {isSubmitting && <Spinner isLoading={isSubmitting}/>}
    {isDeleting && <Spinner isLoading={isDeleting}/>}
        <Box paddingX={10} maxWidth="md">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column'}}>
            
            <Typography component="h1" variant="h5">
            <strong>Edit the meal :</strong></Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal"  fullWidth 
            label="Title" value={title} color='secondary'
            onChange={(e) => setTitle( e.target.value )}/>

            <TextField margin="normal" fullWidth label="Category" value={category}
            onChange={(e) => setCategory(e.target.value) } color='secondary'/>

            <TextField placeholder="Enter description" multiline rows={7} label="Enter description"
            variant="outlined" id="outlined-multiline-static" fullWidth color='secondary' 
            value={description} onChange={(e) => setDescription(e.target.value)}/>

            <TextField margin="normal" fullWidth label="Image URL" value={image}
            onChange={(e) => setImage(e.target.value)} color='secondary'/>


<Stack direction="row" spacing={2} marginTop={1}>

  <Button color='secondary' type="submit" variant="contained" 
  sx={{ mt: 3, mb: 2 }}  disabled={isSubmitting}>
    {isSubmitting ? 'Updating...': 'Update'}</Button>

  <Button color='error' variant="outlined" onClick={handelDelete} disabled={isDeleting}
  sx={{mt: 3, mb: 2,':hover': {bgcolor: 'error.dark',color: 'white'},}}
  >{isDeleting ? 'Deleting...': 'Delete'}</Button>
  
</Stack>
            </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default AdminForm