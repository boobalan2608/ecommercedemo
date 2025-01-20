import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import '../Styles/AdminAddProducts.css'

export default function AdminAddProducts() {
    let [category, setCategory] = useState("")
    let [name, setName] = useState("")
    let [price, setPrice] = useState("")
    let [desc, setDesc] = useState("")
    let [image, setImage] = useState("")
    let [rating, setRating] = useState("")

    let data = { category, name, price, desc, image, rating };
    

    function addItems(e) {
        e.preventDefault() ;
        axios.post("http://localhost:1212/AdminAddProucts", data)
            .then((res) => {
                console.log(res);
                toast.success("Product added Successfully");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Invalid data");
            })
    }
    return (
        <div className='AdminAddItems'>
            <fieldset className='addproduct-form-cont'>
                <div className="addproduct-form-fields">
                    <img src="https://img.freepik.com/free-vector/promotion-cartoon-man-standing-with-loudspeaker-advertisement-commercial-propaganda-journalist-flat-character-white-background_335657-2077.jpg?t=st=1730909847~exp=1730913447~hmac=2390315eec5ca0e5f84bcc7379ea44f1d3fc38e10cc56b3de14cb9d48a4bcea0&w=740" alt="" />
                    <form action="" onSubmit={addItems} className='addproduct-form'>
                        <label>Category : </label>
                        <select required onChange={(e) => { setCategory(e.target.value) }}>
                            <option>Mobile</option>
                            <option>Mobile Accessories</option>
                            <option>Electronics</option>
                            <option>Grocerices</option>
                            <option>Home Appliances</option>
                        </select>

                        <label>Product Name :</label>
                        <input required type="text" onChange={(e) => { setName(e.target.value) }} />

                        <label>Product Price :</label>
                        <input required type="text" onChange={(e) => { setPrice(e.target.value) }} />

                        <label>Description : </label>
                        <textarea required rows="2" cols="20" onChange={(e) => { setDesc(e.target.value) }}></textarea>

                        <label>Product Thumbnail : </label>
                        <input required type="text" onChange={(e) => { setImage(e.target.value) }} />

                        <label>Ratings : </label>
                        <input required type="text" onChange={(e) => { setRating(e.target.value) }} />
                        <button className='btn btn-primary'>Add item </button>
                    </form>
                </div>
            </fieldset>
        </div>
    )
}
