import React from 'react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UserCart() {

    let [product, setProduct] = useState([]);
    let [force, setForce] = useState(0);

    useEffect(() => {
        function fetchData() {
            axios.get("https://ecommercedemodata-1.onrender.com/UserCart")
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

    function deleteItem(id) {
        axios.delete(`https://ecommercedemodata-1.onrender.com/UserCart/${id}`);
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
                                <p>{list.desc}</p>
                                <button className='btn btn-danger' onClick={()=>{ deleteItem(list.id)}}> <DeleteIcon />Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
