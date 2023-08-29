import React, { useState } from 'react';
import './Cart.css';
import { Modal } from 'react-bootstrap';
import CartItem from './CardItem';

const Cart = ({ cartItems, removeItem,show,setShow }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleOrder = async () => {
        try {
          setIsLoading(true);
          setError('');
          setSuccess('');
    
          const orderItems = cartItems.map((item) => ({
            product_id: item.id,
            quantity: 1,
            price: item.price,
          }));
    
          const orderData = {
            user_id: window.sessionStorage.getItem("auth_id"), 
            order_items: orderItems,
            order_date: new Date(),
            total_price: countTotal()

          };
    
          const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
          });
    
          const data = await response.json();
          if (response.ok) {
            setSuccess('Uspešno ste kreirali porudžbinu.');
            removeItem(cartItems); // brisanje stavki iz korpe nakon kreiranja porudžbine
          } else {
            setError(data.message || 'Došlo je do greške prilikom kreiranja porudžbine.');
          }
        } catch (error) {
          console.error(error);
          setError('Došlo je do greške prilikom komunikacije sa serverom.');
        } finally {
          setIsLoading(false);
        }
      };




    const handleClose = () => setShow(false);
 
  
    console.log(cartItems)
    function countTotal(){
        var total=0;
        for(var i=0;i<cartItems.length;i++){
            total+= parseInt(cartItems[i].price);
        }
        console.log("total"+total);
        return total;
    }
  
    return (
      <>
 
            
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {cartItems && cartItems.length > 0 ? (
                        <div>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} removeItem={removeItem} />
                        ))}
                        <p>Total: {countTotal()} RSD</p>
                        <button disabled={isLoading} onClick={handleOrder}>
                            Kreiraj porudžbinu
                        </button>
                        {error && <div className="error">{error}</div>}
                        {success && <div className="success">{success}</div>}
                        </div>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                    </Modal.Body>
                </Modal>

      </>
    );
  };
  

export default Cart;
