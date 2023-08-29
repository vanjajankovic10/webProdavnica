import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { MDBDataTableV5 } from 'mdbreact';
import EditProductModal from './EditProductModal';

const ProductList = ({products,setProducts}) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedProduct, setEditedProduct] = useState(null);
    
    const handleEdit = (productId) => {
        const productToEdit = products.find((product) => product.id === productId);
        if (productToEdit) {
          setShowEditModal(true);
          setEditedProduct(productToEdit);
        }
      };
      
 
  
    const handleDelete = async (productId) => {
      try {
        const response = await axios.delete(`/api/products/${productId}`);
        console.log(response.data);
        setProducts(products.filter(product => product.id !== productId));
      } catch (error) {
        console.error(error);
      }
    };
 
    const handleUpdate = async (productId, updatedData) => {
        try {
          const response = await axios.put(`/api/products/${productId}`, updatedData);
          console.log(response.data);
          setProducts(
            products.map((product) => (product.id === productId ? { ...product, ...updatedData } : product))
          );
        } catch (error) {
          console.error(error);
        }
      };
      
  
  const datatable = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        width: 50,
      },
      {
        label: 'Naziv proizvoda',
        field: 'name',
        width: 200,
      },
      {
        label: 'Opis proizvoda',
        field: 'description',
        width: 300,
      },
      {
        label: 'Cena',
        field: 'price',
        width: 100,
      },
      {
        label: 'Kategorija',
        field: 'category_name',
        width: 200,
      },
      {
        label: 'Opcije',
        field: 'options',
        width: 100,
      }
    ],
    rows: products.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category_name: product.category.name,
      options: (
        <>
          <button className="btn btn-warning" onClick={() => handleEdit(product.id)}>Izmeni</button>
          <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Obriši</button>
        </>
      )
    }))
  };
  return <div className='tabelaProducts'>
    <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={10} pagesAmount={4} data={datatable} />
        {editedProduct && (
        <EditProductModal
            show={showEditModal}
            handleClose={() => setShowEditModal(false)}
            product={editedProduct}
            handleUpdate={handleUpdate}
        />
        )}
     
    </div>;

};

export default ProductList;
