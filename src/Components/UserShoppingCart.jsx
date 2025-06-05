import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import "../Styles/UserShoppingCart.css";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function UserShoppingCart() {
    let [product, setProduct] = useState([]);
    let [force, setForce] = useState(0);
    useEffect(() => {
        function fetchData() {
            axios.get("https://ecommercedemodata-1.onrender.com/AdminAddProucts")
                .then((res) => {
                    console.log(res.data);
                    setProduct(res.data);
                })
                .catch((err) => {
                    toast.error("Invalid Data")
                })
        }
        fetchData();
    }, [force])
    async function addToCart(id) {
        let res = await axios.get(`http://localhost:1212/AdminAddProucts/${id}`)
        let {name,category,price,desc,image,rating} = res.data;
        
        toast.success("Product Added Successfully")

        let data = { name, category, price, desc, image, rating }
        let result = await axios.post("http://localhost:1212/UserCart",data);
    }
    function deleteItem(id) {
        axios.delete(`http://localhost:1212/AdminAddProucts/${id}`);
        setForce(force + 1);
        toast.error("Deleted Sucessfully");
    }
    return (
        <div className="user-shopping-product">
            {product.map((list) => {
                return (
                    <div className="product-container">

                        <div className="product-list">
                            <div className="list-item-img">
                                <img src={list.image} alt="" width={300} height={300} />
                            </div>
                            <div className="list-item-info">

                                <h3>{list.name}</h3>
                                <p>{list.rating} ⭐/ 5⭐</p>
                                <h4>₹{list.price}</h4>
                                <span>20% OFF</span>
                                <p>{list.desc}</p>
                                <button className='btn btn-warning' onClick={() => { addToCart(list.id) }}><AddShoppingCartIcon fontSize='small' />Add to Cart</button>
                                <button className='btn btn-danger' onClick={() => { deleteItem(list.id) }}> <DeleteIcon />Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
