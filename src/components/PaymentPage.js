import React, { useEffect, useState } from 'react'
import CheckoutHeader from './CheckoutHeader'


 

const PaymentPage = () => {

const [savedAddresses, setSavedAddresses] = useState([]);
   
  
 const saveAddress = () =>{

   const setAdress = savedAddresses.map((addr) =>{
      return addr;
   })
       
    setSavedAddresses(setAdress);
    localStorage.setItem("addresses", JSON.stringify(setAdress))

 }


 useEffect(() =>{
    saveAddress()
 }, [])

  return (
    <div>
         <CheckoutHeader />
         <div className='flex  justify-center items-center gap-4 mt-4'>
         <div className='w-[800px] h-[500px] bg-red-400 p-2 '>
            <h1 className='text-xl font-bold'> 1. Delivery address</h1>
            <div className="mt-4 w-[680px] ">
              {savedAddresses.length > 0 ? (
                savedAddresses.map((addr, index) => (
                  <div key={index} className="border-2 border-orange-400 p-2 mb-2 h-[80px]">
                    <div className="flex flex-col justify-between">
                      <div className="font-bold">
                        {addr.fullname}, {addr.appartment}, {addr.area}, {addr.city}, {addr.state}, {addr.pincode}, {addr.landmark}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No addresses saved yet.</p>
              )}
            </div>
         </div>
         <div className='w-[250px] h-[500px] bg-yellow-400'></div>
         </div>
        
        
    </div>
  )
}

export default PaymentPage