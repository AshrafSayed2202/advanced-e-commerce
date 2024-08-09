import React, { useEffect, useState } from 'react';
import { fetchOrderHistory } from '../../utils/api';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const data = await fetchOrderHistory();
            setOrders(data);
        };
        getOrders();
    }, []);

    return (
        <div>
            <h2>Order History</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Order #{order.id} - {order.date} - ${order.total}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
