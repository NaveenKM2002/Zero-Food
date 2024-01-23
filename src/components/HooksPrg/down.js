// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Axios for making API requests

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch data from API endpoint
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.example.com/products'); // Replace with your API endpoint
//         setProducts(response.data); // Assuming response.data is an array of product objects
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDownloadCSV = () => {
//     // Function to download data as CSV
//     const csvContent = 'data:text/csv;charset=utf-8,';
//     const headers = Object.keys(products[0]).join(',') + '\n';
//     const rows = products.map(product => Object.values(product).join(',')).join('\n');
//     const csv = csvContent + headers + rows;

//     const encodedUri = encodeURI(csv);
//     const link = document.createElement('a');
//     link.setAttribute('href', encodedUri);
//     link.setAttribute('download', 'products.csv');
//     document.body.appendChild(link);

//     link.click();
//   };

//   return (
//     <div>
//       <h1>Product Page</h1>
//       <button onClick={handleDownloadCSV}>Download CSV</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Product Image</th>
//             <th>Product Name</th>
//             <th>Product Description</th>
//             <th>Product Rating</th>
//             <th>Product Category</th>
//             <th>Product Count</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.productId}>
//               <td><img src={product.image} alt={product.name} /></td>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.rating}</td>
//               <td>{product.category}</td>
//               <td>{product.count}</td>
//               <td><button onClick={() => handleViewProduct(product.productId)}>View</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductPage;
import React, { useState } from 'react';

const ProductPage = () => {
  const [foodItem, setFoodItem] = useState('');
  const [foodImage, setFoodImage] = useState('');
  const [foodList, setFoodList] = useState([]);

  const handleAddItem = () => {
    if (foodItem.trim() !== '' && foodImage.trim() !== '') {
      setFoodList([...foodList, { name: foodItem, image: foodImage }]);
      setFoodItem('');
      setFoodImage('');
    }
  };

  return (
    <div>
      <h2>Add Food Items</h2>
      <div>
        <label>
          Food Item:
          <input
            type="text"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={foodImage}
            onChange={(e) => setFoodImage(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <ul>
        {foodList.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>
            <br />
            <img src={item.image} alt={item.name} style={{ maxWidth: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
