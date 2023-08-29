import React, { useEffect, useState } from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard';
import { FaShoppingCart } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import Cart from './Cart';
import axios from 'axios';

const ProductGrid = ({ products }) => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [currency, setCurrency] = useState('RSD');
 
   //javni web servis da dobijemo koeficijent RSD_EUR
   const [RSD_EUR, setRSDEUR] = useState([]);
   useEffect(() => {
       axios({
         method: "GET",
         url:
           "https://api.currencyapi.com/v3/latest?apikey=zbICuoNBacI03bcETlGc6Pm9LJS4x5c5lgmNTBj4&currencies=RSD&base_currency=EUR",
            
       })
         .then((response) => {
           console.log(response.data.data['RSD'].value);
           setRSDEUR(response.data.data['RSD'].value);
           
         })
         .catch((error) => {
           console.log(error);
       });
   }, []);
 
 
 
 //javni web servis da dobijemo koeficijent RSD_USD
 const [RSD_USD, setRSDUSD] = useState([]);
   useEffect(() => {
     axios({
       method: "GET",
       url:
         "https://api.currencyapi.com/v3/latest?apikey=zbICuoNBacI03bcETlGc6Pm9LJS4x5c5lgmNTBj4&currencies=RSD&base_currency=USD",
          
     })
       .then((response) => {
         console.log(response.data.data['RSD'].value);
         setRSDUSD(response.data.data['RSD'].value);
         
       })
       .catch((error) => {
         console.log(error);
     });
 }, []);



  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
 
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };
  const filteredProducts = products.filter(product => {
    // Filtriranje na osnovu kategorije proizvoda
    if (filter !== '' && product.category.id !== parseInt(filter)) {
      return false;
    }

    // Pretraga po nazivu proizvoda
    if (search !== '' && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    return true;
  });

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };


  
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
    setShow(false);

  };
  return (
    <div>
      <div className="filters">
        <select value={currency} onChange={handleCurrencyChange}>
            <option value="RSD">RSD</option> 
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            
        </select>
        <select value={filter} onChange={handleFilterChange}>
          <option value="">Sve kategorije</option>
          <option value="1">Cleanser</option>
          <option value="2">Treatment</option>
          <option value="3">Toner</option>
          <option value="4">Moisturiser</option>
          <option value="5">Sun protection</option>
        </select>
        <input type="text" value={search} onChange={handleSearchChange} placeholder="Pretraga proizvoda" />
      </div>
      <button className="cart-button" onClick={handleCartOpen}>
          <FaShoppingCart />
        </button>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
          key={product.id}
          product={product}
          addToCart={() => addToCart(product)}
          removeFromCart={() => removeFromCart(product)}
          inCart={cart.some((item) => item.id === product.id)  }
          RSD_USD={RSD_USD}
          RSD_EUR={RSD_EUR}

          selectedCurrency={currency} 
        />
        ))}
      </div>
      {
            cartOpen?
            <> <Cart cartItems={cart} removeItem={removeFromCart} show={true} setShow={handleCartClose}></Cart></>
            :
            <></>


      }
    </div>
  );
};

export default ProductGrid;
