import { useContext } from "react";
import productsData from "../assets/productData";
import { CartContext } from "../store.jsx";

export default function Product() {
    const [state,dispatch] = useContext(CartContext)
    
    return (
        <div className="row row-cols-3 g-3">
        {
            productsData.map((item)=>{
                return(
                    <div className="col" key={item.id}>
                        <div className="card">
                            <img
                                src={item.img}
                                className="card-img-top"
                                alt="{item.title}"
                            />
                            <div className="card-body">
                                <h6 className="card-title">
                                    {item.title}
                                    <div className="float-end">NT ${item.price}</div>
                                </h6>
                                <button type="button" className="btn btn-outline-primary w-100" onClick={()=>{
                                    dispatch({
                                        type: 'ADD_TO_CART',
                                        payload:{
                                            ...item,
                                            quantity:1
                                        }
                                    })
                                }}>
                                加入購物車
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    );
}
