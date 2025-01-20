import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import '../Styles/AdminUpdateItems.css';
import { useParams } from 'react-router-dom';

export default function AdminUpdateItems() {
    let [category, setCategory] = useState("")
    let [name, setName] = useState("")
    let [price, setPrice] = useState("")
    let [desc, setDesc] = useState("")
    let [image, setImage] = useState("")
    let [rating, setRating] = useState("")

    let params = useParams();
    console.log(params.id);
    useEffect(() => {
        axios.get(`https://ecommercedemodata-1.onrender.com/AdminAddProucts/${params.id}`)
            .then((res) => {
                console.log(res.data);
                setCategory(res.data.category);
                setDesc(res.data.desc);
                setName(res.data.name);
                setImage(res.data.image);
                setPrice(res.data.price);
                setRating(res.data.rating)

            }).catch((err) => {
                console.log(err);

            })
    },[])
    let data = { category, name, desc, rating, price, image };
    function updateItems(e) {
        e.preventDefault();
        axios.put(`https://ecommercedemodata-1.onrender.com/AdminAddProucts/${params.id}`, data)
            .then(() => {
                toast.success("Product Updated Successfully")
            })
            .catch((err) => {
                toast.err("Unexpected Error Occured");
            })
    }
    return (
        <div className='AdminUpdateItems'>
            <fieldset className='updateitem-form-cont'>
                <div className="update-form-fields">
                    <img src="https://img.freepik.com/premium-vector/system-software-update-illustration-design-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-821.jpg?w=740" alt="" />
                    <form action="" onSubmit={updateItems} className='updateitem-form'>
                        <label>Category : </label>
                        <select required value={category} onChange={(e) => { setCategory(e.target.value) }}>
                            <option>Mobile</option>
                            <option>Mobile Accessories</option>
                            <option>Electronics</option>
                            <option>Grocerices</option>
                            <option>Home Appliances</option>
                        </select>

                        <label>Product Name :</label>
                        <input required type="text" value={name} onChange={(e) => { setName(e.target.value) }} />

                        <label>Product Price :</label>
                        <input required type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} />

                        <label>Description : </label>
                        <textarea required rows="2" cols="20" value={desc} onChange={(e) => { setDesc(e.target.value) }}></textarea>

                        <label>Product Thumbnail : </label>
                        <input required type="text" value={image} onChange={(e) => { setImage(e.target.value) }} />

                        <label>Ratings : </label>
                        <input required type="number" value={rating} onChange={(e) => { setRating(e.target.value) }} />
                        <button className='btn btn-primary' onClick={updateItems}>Update</button>
                    </form>
                </div>
            </fieldset>
        </div>
    )
}
