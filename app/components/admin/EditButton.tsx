"use client"

import { Button } from '@mui/material'
import Link from 'next/link'

interface Props{
    id : string | number
}

const EditButton = ({id}:Props) => {
    return (
        <Button color="secondary" variant="outlined"
        sx={{borderRadius: 12.5,paddingX:'40px',paddingY:'7px'}}>
        <Link href={`/admin/meals/${id}/edit`} 
        style={{textDecoration: 'none'}}
        >Edit</Link></Button>
    )
}

export default EditButton