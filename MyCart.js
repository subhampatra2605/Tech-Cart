import {useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyCart(props){
    const items =props.purchaseItem;
    const[amount,setAmount]=useState(0);
    useEffect(()=> {
        let sum=0;
        for(let i=0;i<items.length;i++)
        sum +=items[i].price;
    setAmount(sum);
    },[items])
    const del=(i)=> {
        props.delProduct(i);
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-7">
                    {items.map((d,i)=>{
                        return(
                            <>
                            <div className="card mt-3">
                            <img className="card-img-top" src={d.url} alt="productPic" style={{height:"200px", width:"200px"}}/>
                                <div className ="card-body">
                                <h5 class="card-title">{d.title}</h5>
                                <h5 class="card-title">Rs.{d.price}/-</h5>
                                <button className="btn btn-danger" onClick={()=>del(i)}>Delete</button>
                                <p class="card-text">{d.description}</p> 
                                </div>
                                </div>
                                </>
                        )
                    })}
                            
                        </div>
                        <div className="col-5">
                        <h3>Your order</h3>
                        <table className="table table-blue">
                        <tr> <th> Product Name </th><th>SubTotal</th></tr>
                        {items.map((d,i)=><tr><td>{d.title}</td><td>Rs.{d.price}/-</td></tr>)}
                        <tr><h4>
                            <td>Total</td>
                            <td>Rs.{amount}/-</td>
                        
                        </h4></tr>
                        <tr><td colSpan="2"><button className="btn btn-sucess">Place order</button></td></tr>
                        </table>
                </div>
        </div>
        </div>
        </>
    )
}