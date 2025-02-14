import { useState } from "react";
export default function AddProduct(){
    const [title , setTitle] = useState('');
    const [price , setPrice] = useState(0);
    const [count , setCount] = useState(0);
    const [url , setUrl] = useState('');
    const [description , setDescription] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();

        let result = await fetch ('http://localhost:3000/addproduct',{
            method : "post",
            body : JSON.stringify({title,price,count,url,description}),
            headers:{'content-type' : 'application/json'}
        })
        if(result){
            alert('Data Saved!')
        }
        else console.log('Error');
    }
    return(
        <>
        <h1>Add Product Details</h1>
        <form>
            Enter Product Title:
            <input type = "text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            Enter Product Price:
            <input type = "number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <br/>
            Enter Product Count:
            <input type = "number" value={count} onChange={(e)=>setCount(e.target.value)}/>
            <br/>
            Enter Product URL:
            <input type = "text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
            <br/>
            Enter Product Description:
            <input type = "text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <br/>
            <button type ='submit' onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}