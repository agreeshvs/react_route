import React from 'react'
import { useNavigate } from 'react-router-dom';

export const OrderSummary = () => {
    const navigate = useNavigate()
    // -1 used to navigate to last path
  return (
    <>
        <div>Order Confirmed</div>
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
    
  )
}
