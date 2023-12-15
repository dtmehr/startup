import React, { useEffect, useState } from 'react';
import './shop.css';

export function Shop() {
  const [braceletList, setBraceletList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [clicks, setClicks] = useState(0); // New state for click count

  useEffect(() => {
    setBraceletList([
      {
        id: 1,
        name: 'Bracelet 1',
        image: 'bracelet1.jpg',
      },
      {
        id: 2,
        name: 'Bracelet 2',
        image: 'bracelet2.jpg',
      },
      // Add other bracelet objects here...
    ]);
  }, []);

  const addToCart = async (i) => {
    try {
      let currBracelet = braceletList[i];
      setClicks(clicks + 1); // Increment click count
      const response = await fetch('/api/addCart', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(currBracelet),
      });
      if (response.ok) {
        // Add logic to update cart items if needed
        console.log('Item added to cart');
      } else {
        console.error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      let score = Math.floor(Math.random() * 3000);
      const chatText = document.getElementById('notifier');
      if (chatText) {
        chatText.innerHTML = 'bob ordered ' + score;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div id="container">
        {braceletList.map((bracelet, index) => (
          <span key={bracelet.id} id={`item${bracelet.id}`}>
            <img alt={bracelet.name} src={bracelet.image} />
            <button onClick={() => addToCart(index)}>Purchase</button>
          </span>
        ))}
      </div>
      <p id="cartCount">Cart: {clicks}</p> {/* Display the click count */}
      <div id="notifier"></div> {/* Display the order notifications */}
    </main>
  );
}
