export const fetchOrderHistory = async () => {
    const response = await fetch('/api/orders'); // Replace with your API endpoint
    const data = await response.json();
    return data;
};
