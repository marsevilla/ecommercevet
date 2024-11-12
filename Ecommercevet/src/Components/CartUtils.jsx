import axios from "axios";

export const fetchCartItems = async () => {
    const response = await axios.get("http://localhost:8000/api/cart", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
};

export const addProductToCart = async (productId, quantity = 1) => {
    await axios.post(
    "http://localhost:8000/api/cart/add",
    { product_id: productId, quantity },
    {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
    );
};
