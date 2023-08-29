import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeItem }) => {
  const { name, price, image } = item;

  return (
    <div className="cart-item">
    
      <div className="cart-item-details">
        <p>{name}</p>
        <p>{price} RSD</p>
        <button onClick={() => removeItem(item)}>Ukloni</button>
      </div>
    </div>
  );
};

export default CartItem;
