import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, IconButton ,Drawer, List, Typography, ListItem} from '@mui/material';
import Link from 'next/link'

interface Props{
  isOpen : boolean,
  setIsOpen :(isOpen :boolean) =>void
}

const NavDrawer = ({isOpen,setIsOpen}:Props) => {
    const navItems = [
	{
        name: "Home",
        link: "",
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
  return (
    <Drawer sx={{flexShrink: 0, 
        '& .MuiDrawer-paper': {padding:'20px',width: '300px',boxSizing: 'border-box',},}}
        variant="persistent" anchor="left" open={isOpen}  onClose={() => setIsOpen(false)}  >
       <Box display='flex' justifyContent='end'>
         <IconButton onClick={()=>setIsOpen(false)}>
            <ChevronLeftIcon /> 
        </IconButton>
        </Box>
        <List>
        {navItems.map(item => (
            <ListItem key={item.name} sx={{padding:'20px'}} >
            <Typography color='black' noWrap 
            // component={Link} to={item.link} 
            sx={{ textDecoration: 'none'}}> { item.name } </Typography>
            </ListItem>
        ))}
        </List>
        </Drawer>
  )
}

export default NavDrawer