import React from 'react'
import {Box} from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
export const Products = () => {
  return (
   <>
    <Box sx={{padding: '20px'}}>
        <input type='search' placeholder='Search Product' />
    </Box>
    <nav className='secondary'>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet />
    {/* outlet render matching child */}
   </>
  )
}
