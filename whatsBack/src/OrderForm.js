// // src/components/OrderForm.js

// import React, { useState } from 'react';

// const OrderForm = () => {
//   const [name, setName] = useState('');
//   const [product, setProduct] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const order = { name, product, phone };

//     const response = await fetch('http://localhost:5000/order', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(order),
//     });

//     if (response.ok) {
//       alert('Order sent successfully!');
//     } else {
//       alert('Error sending order.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </label>
//       <br />
//       <label>
//         Product:
//         <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} required />
//       </label>
//       <br />
//       <label>
//         Phone:
//         <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//       </label>
//       <br />
//       <button type="submit">Submit Order</button>
//     </form>
//   );
// };

// export default OrderForm;


// src/components/OrderForm.js

// import React, { useState } from 'react';

// const OrderForm = () => {
//   const [name, setName] = useState('');
//   const [product, setProduct] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const order = { name, product, phone };

//     try {
//       const response = await fetch('http://localhost:5000/order', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(order),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       alert('Order sent successfully!');
//     } catch (error) {
//       console.error('Failed to submit order:', error);
//       alert('Error sending order. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </label>
//       <br />
//       <label>
//         Product:
//         <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} required />
//       </label>
//       <br />
//       <label>
//         Phone:
//         <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//       </label>
//       <br />
//       <button type="submit">Submit Order</button>
//     </form>
//   );
// };

// export default OrderForm;
// src/components/OrderForm.js
import React, { useState } from 'react';
import Product from './Product';
import './OrderForm.css';

const productsList = [
  { id: 1, name: 'Rice', price: 50, image: '/images/rice.png' },
  { id: 2, name: 'Sugar', price: 40, image: '/images/sugar.png' },
  { id: 3, name: 'Organic Jaggery', price: 60, image: '/images/jaggery.png' },
  { id: 4, name: 'Maggie Ketchup', price: 70, image: '/images/ketchup.png' },
  { id: 5, name: 'Medimix Soap', price: 20, image: '/images/soap.png' },
  { id: 6, name: 'Boost', price: 150, image: '/images/boost.png' },
];

const OrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantities, setQuantities] = useState(
    productsList.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      name,
      phone,
      products: productsList.map((product) => ({
        ...product,
        quantity: quantities[product.id],
      })),
    };

    try {
      const response = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert('Order sent successfully!');
    } catch (error) {
      console.error('Failed to submit order:', error);
      alert('Error sending order. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="products-grid">
        {productsList.map((product) => (
          <Product
            key={product.id}
            product={product}
            quantity={quantities[product.id]}
            setQuantity={(quantity) =>
              setQuantities({ ...quantities, [product.id]: quantity })
            }
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="order-form">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
