import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()
  // {replace: true} -> Replace the history
  return (
    <>
      <div>HomePage</div>
      <button onClick={() => navigate('order-summary',{replace: true})}>Place Order</button>
    </>
  )
}
