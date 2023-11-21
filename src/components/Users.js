import { Paper } from '@mui/material';
import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom';

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
        <h2>
            <Link to='/users/1'>User 1</Link>
        </h2>
        <h2>
            <Link to='/users/2'>User 2</Link>
        </h2>
        <h2>
            <Link to='/users/3'>User 3</Link>
        </h2>
        <h2>
            <Link to='/users/admin'>Admin</Link>
        </h2>
        <Outlet />
        <div>
            <button onClick={()=> setSearchParams({filter:'active'})}>Active Button</button>
            <button onClick={()=> setSearchParams({})}>Reset Filters</button>
        </div>
        <Paper sx={{padding:'20px',margin: '20px'}} elevation={3}>
           {
            showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
           }
        </Paper>
    </div>
  )
}
