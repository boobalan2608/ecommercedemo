import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Styles/AdminShoppingList.css";
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AdminShoppingList() {
    let [product, setProduct] = useState([]);
    let [force, setForce] = useState(0);

    useEffect(() => {
        function fetchData() {
            axios.get("http://localhost:1212/AdminAddProucts")
                .then((res) => {
                    console.log(res.data);
                    setProduct(res.data);
                })
                .catch((err) => {
                    toast.error("Invalid Data")
                })
        }
        fetchData();
    },[force])
    let navigate = useNavigate();
    function updatePage(id){
        navigate(`/adminhome/AdminUpdateItems/${id}`)
    }
    function deleteItem(id){
        axios.delete(`http://localhost:1212/AdminAddProucts/${id}`);
        setForce(force+1);
        toast.error("Deleted Sucessfully");
    }
    return (
        <div className="admin-shopping-product">
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
                                <span>20% OFF</span><br />
                                <del><span>₹{Number(list.price) + Math.round(Math.random()*10000)}</span></del>
                                <p>{list.desc}</p>
                                <button className='btn btn-warning' onClick={() => { updatePage(list.id) }}><ModeIcon/>Update</button>
                                <button className='btn btn-danger' onClick={() => { deleteItem(list.id) }}> <DeleteIcon/>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}