import React from 'react';
import './AdminPage.css';
const AdminPage = ({porudzbine}) => {
    console.log(porudzbine)
  return (
    <div>
      <h1>Admin panel</h1>
      <div className="admin">
      <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Total Price</th>
                <th>Order Date</th>
                <th>Order Items</th>
                </tr>
            </thead>
            <tbody>
                {porudzbine.map((order) => (
                    <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.user_id}</td>
                    <td>{order.total_price}</td>
                    <td>{order.order_date}</td>
                    <td>
                        <table>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.order_items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.product_name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </td>
                    </tr>
                ))}
                </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminPage;
