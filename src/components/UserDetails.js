import React from 'react'
import { useParams } from 'react-router-dom'
export const UserDetails = () => {
    // useParams used to get values from the URL
    // const params = useParams()
    // const userId = params.userId
    const {userId} = useParams()
  return (
    <div>
        Details about user {userId}
    </div>
  )
}
