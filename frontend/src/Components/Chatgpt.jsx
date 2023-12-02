import React, { useState } from 'react';

const Chatgpt = () => {
  const [inputs, setInputs] = useState({
    quantity: 0,
    costPrice: 0,
    margin: 0,
    discount: 0,
    tax: 0,
  });
  const [totalAmount, setTotalAmount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: parseFloat(value),
    });
  };

  const calculateTotal = () => {
    const { quantity, costPrice, margin, discount, tax } = inputs;
    const totalPriceBeforeDiscount = quantity * costPrice * (1 + margin / 100);
    const totalPriceAfterDiscount = totalPriceBeforeDiscount - (totalPriceBeforeDiscount * discount / 100);
    const totalPriceWithTax = totalPriceAfterDiscount + (totalPriceAfterDiscount * tax / 100);

    setTotalAmount(totalPriceWithTax.toFixed(2));
  };

  return (
    <div>
      <label>
        Quantity:
        <input type="number" name="quantity" value={inputs.quantity} onChange={handleInputChange} />
      </label><br />

      <label>
        Cost Price:
        <input type="number" name="costPrice" value={inputs.costPrice} onChange={handleInputChange} />
      </label><br />

      <label>
        Margin (%):
        <input type="number" name="margin" value={inputs.margin} onChange={handleInputChange} />
      </label><br />

      <label>
        Discount (%):
        <input type="number" name="discount" value={inputs.discount} onChange={handleInputChange} />
      </label><br />

      <label>
        Tax (%):
        <input type="number" name="tax" value={inputs.tax} onChange={handleInputChange} />
      </label><br />

      <button onClick={calculateTotal}>Calculate Total</button>

      <div>
        Total Amount: ${totalAmount}
      </div>
    </div>
  );
};

export default Chatgpt;
