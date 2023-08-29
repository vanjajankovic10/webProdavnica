import { useState } from 'react';
import axios from 'axios';
import './AddProductForm.css';
const AddProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category_id', category);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/products', formData);
      console.log(response.data);
      alert("Successfully added")
      //TODO DOPUNI NIZ SA SETPRODUCTS
      
    } catch (error) {
      console.error(error);
    }
  };
  function handleInput(e){  
    
   
    setCategory(e.target.value);  
    console.log(category);
   
}
  return (
    <div className="addProduct">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Naziv proizvoda:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

      <label htmlFor="description">Opis proizvoda:</label>
      <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>

      <label htmlFor="price">Cena proizvoda:</label>
      <input type="number" id="price" value={price} onChange={(event) => setPrice(event.target.value)} />

      <label htmlFor="category_id">Kategorija proizvoda:</label>
      <select id="category_id"  onInput={(event) => handleInput(event)}>
        <option value={1}>Izaberi kategoriju</option>
        <option value={1}>Cleanser</option>
        <option value={2}>Treatment</option>
        <option value={3}>Toner</option>
        <option value={4}>Moisturiser</option>
        <option value={5}>Sun protection</option>
      </select>

      <label htmlFor="image">Slika proizvoda:</label>
      <input type="text" id="image" value={image} onChange={(event) => setImage(event.target.value)} />

      <button type="submit">Dodaj proizvod</button>
    </form>
    </div>
  );
};

export default AddProductForm;