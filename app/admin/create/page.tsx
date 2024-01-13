"use client"

import { useRouter } from 'next/navigation';
import axios from 'axios';
import React, { useState, FormEvent } from 'react'
import {Button,CssBaseline,TextField,Box,Container,Typography} from '@mui/material';
import Spinner from '@/app/components/Spinner';

const CreatePage = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [isCreating, setCreating] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        setCreating(true)
        event.preventDefault()
        await axios.post('https://654e4e21cbc325355742b673.mockapi.io/meals',{
            title,description,image,category
        });
        router.push('/admin');
        setCreating(false)
    }
    return ( 
    <Container >
        {isCreating && <Spinner isLoading={isCreating}/>}
        <Box paddingX={10} maxWidth="md">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column'}}>
            <Typography component="h1" variant="h5">
            <strong>Add new meal :</strong></Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal"  fullWidth 
            label="Title" value={title} color='secondary'
            onChange={(e) => setTitle(e.target.value)}/>

            <TextField margin="normal" fullWidth label="Category" value={category}
            onChange={(e) => setCategory(e.target.value)} color='secondary'/>

<TextField placeholder="Enter description" multiline rows={7} label="Enter description"
variant="outlined" id="outlined-multiline-static" fullWidth color='secondary' 
value={description} onChange={(e) => setDescription(e.target.value)}/>

            <TextField margin="normal" fullWidth label="Image URL" value={image}
            onChange={(e) => setImage(e.target.value)} color='secondary'/>

            <Button color='secondary' type="submit" variant="contained" 
            sx={{ mt: 3, mb: 2 }} >{isCreating ? 'Creating...': 'Create'}</Button>
            </Box>
        </Box>
    </Box>
    </Container>
    )
}


export default CreatePage