
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
   const[price , setPrice]=useState("")
   const[discount , setDiscount]=useState("")
   const[amount,SetAmount]=useState(0)
   const[final,setFinalAmount]=useState(0)
   const[saved,setSaved]=useState(0)
   const handleDiscount=()=>{
   const  Price=price*discount/100
     SetAmount(Price)
    const FinalAmount=price-price*discount/100
    setFinalAmount(FinalAmount)
    const Saved=discount
    setSaved(Saved)
   }
   const handleReset=()=>{
    setPrice("")
    setDiscount("")
    SetAmount(0)
    setSaved(0)
    setFinalAmount(0)
    setSaved(0)
   }
  return (
    <>
     <div id='d1' className='card col-md-6 col-12 container shadow mt-3 pb-2  ' > <br />
      <div className='d2'>
        <h2 className='text-center '>Discount Calculator</h2>  <br /><br />
        <div id='d3' className='col-md-6 col-8 text-center shadow  container border rounded'>
          <h5 className=' rounded   mb-3'>Discounted Price</h5> 
          <h6 >₹{final}</h6> <br />
           <div id='d4' className='d-flex justify-content-between align-items-center  ' >
            <h6 className='text-center ms-3'>Discount <br />
             ₹{amount}
            </h6>
            <h6 className=''>Discount Percent
              <br />
              {saved}%
            </h6>
             <br />
           </div> <br />
          </div>
          </div> <br />
          <div className='container w-75 ' >
          <TextField
          required
          onChange={e=>setPrice(e.target.value)}
          value={price}
          className=' w-100'
          id="filled-required"
          label="Price"
          defaultValue=""
          variant="filled"
        /> <br /> <br />
         <TextField
          required
          onChange={e=>setDiscount(e.target.value)}
         value={discount}
          className=' w-100'
          id="filled-required"
          label="Dicount Percent"
          defaultValue=""
          variant="filled"
        />  <br />
          </div> <br />
          <div className='d-flex justify-content-evenly'>
          <Button onClick={handleDiscount} variant="contained" color="secondary">Calculate</Button>
          <Button onClick={handleReset} variant="outlined" color="secondary">Reset</Button>
          </div> <br />
     </div>
    </>

  )
}

export default App
