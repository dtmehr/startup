import React, { useEffect, useState } from 'react';
import './scores.css';

export function Scores() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function cartData() {
      try {
        const results = await fetch('/api/cartItems');
        const cartItemsData = await results.json();
        setCartItems(cartItemsData);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    }

    cartData();
  }, []);

  return (
    <main className="container-fluid bg-secondary text-center">
      <table className="table table-warning table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="cartTable">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>$5</td>
                <td>May 20, 2021</td>
              </tr>
            ))
          ) : (
            <><tr>
                <td>bracelet1</td>
                <td>$5</td>
                <td>May 20, 2021</td>
              </tr><tr>
                  <td>bracelet1</td>
                  <td>$5</td>
                  <td>May 20, 2021</td>
                </tr><tr>
                <td>bracelet3</td>
                  <td>$5</td>
                  <td>May 20, 2021</td>
                  </tr></>
          )}
        </tbody>
      </table>
    </main>
  );
}
