import laptop_data from "./LaptopData.json";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props){
    const addToCart = (index) =>{
       let curProduct= laptop_data[index];
       alert(curProduct.title + "has been added to cart!");
       props.purchaseFun(curProduct);

    }
    return(
    <>
    <h1><u><center>Laptop Shopping Cart</center></u></h1>
    <div className="container">
        <div className="row">
            {laptop_data.map((d,i)=> {
            return(
                <>
                    <div className="col-3 text-center">
                        <img src={d.url} alt="ProductImage" style={{height:"200px", width:"200px"}}/>
                        <br/>{d.title}
                        <br/>Rs.{d.price}/-
                        <br/><button className="btn btn-primary" onClick={()=>addToCart(i)}>Add to Cart</button>
                    </div>
                </>
            )
            })}
        </div>
    </div>
    </>
 )

}