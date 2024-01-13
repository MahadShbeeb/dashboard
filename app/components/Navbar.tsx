"use client"
import { Box,  Divider,  IconButton, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useState } from 'react';
import NavDrawer from './NavDrawer';

const NavBar = () => {
    const navItems = [
	{
        name: "Home",
        link: "/",
	},
    {
        name: "Meals",
        link: "/meals",
	},
    {
        name: "Admin",
        link: "/admin",
	}
];
    const [isOpen,setIsOpen]=useState(false)
    return ( 
        <>
        <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        <Toolbar  sx={{ boxShadow: 1 }}>
        <Typography variant="h5" noWrap component="a" href="/"
        sx={{mr: 2,fontWeight: 100,fontFamily:'roboto',color:'black',letterSpacing: '.2rem',textDecoration: 'none'}}>RESTAURANT DASHBOARD</Typography>

        <Divider orientation="vertical"  variant="middle"  flexItem  />    
        <Box sx={{marginLeft:'10px', flexGrow: 1 , display: 'flex' ,justifyContent:'start'}}>
        
        {navItems.map(item=> 
        
        <Box key={item.name} marginX={1} display={{ md: 'block', xs: 'none' }}>
        <Link key={item.name} color='black' href={item.link} 
        style = {{ textDecoration: 'none'}}> { item.name } </Link>
        </Box>)}</Box>
        
        <Box display={{ xs: 'block', md: 'none' }}>
            <IconButton onClick={()=>{setIsOpen(!isOpen)}}> 
                <DragHandleIcon/>
            </IconButton>
        </Box>
        </Toolbar>
        </>
    )
}

export default NavBar