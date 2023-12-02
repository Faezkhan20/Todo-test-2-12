import React, { useState } from 'react'

const HomepageTodo = () => {

    const [State, SetState] = useState([{ quantity: "", costPrice: "", margin: "", discount: "", tax: "", }])
    // const [state2,setstate2]=useState([])
    console.log(State)


    function handleChange(event) {
        SetState({ ...State, [event.target.name]: event.target.value })
       
    }

    function handleSubmit() {
         
    }



    return (
        <div>
            <form >
                <h1>Invoice Calculator</h1><br />
                <label>Quantity</label><br />
                <input type="number" name='quantity' onChange={handleChange} /><br />
                <label>Cost price</label><br />
                <input type="number" name='costPrice' onChannge={handleChange} /><br />
                <label>Margin%</label><br />
                <input type="number" name='margin' onChange={handleChange} /><br />
                <label>Discount%</label><br />
                <input type="number" name='discount' onChange={handleChange} /><br />
                <label>Tax%</label><br />
                <input type="number" name='tax' onChange={handleChange} /><br />
                <button type="button" onclick={handleSubmit}>Calculate Total</button>
            </form>
            <div id='totalAmount'></div>
        </div>
    )
}

export default HomepageTodo