import { useEffect, useState } from "react"
import axios from "axios";
import "./shopping.component.css"
export function ShoppingComponent()
{
    const[categories, setCategories]=useState([]);
    const [products, setProducts]=useState([]);

    function LoadCategories(){
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response=>{
            response.data.unshift("all");
            setCategories(response.data);
        })
    }
    function LoadProducts(url){
        axios.get(url).then(response=>{
            setProducts(response.data);
        });
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products");
    },[]);

    function handleCategoryChanged(e){
        LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }
    return(
        <div className="container-fluid">
            <header className="bg-dark text-white text-center p-2">
                <h2><span className="bi bi-cart"></span>Shopper</h2>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChanged} className="form-select">
                                {
                                    categories.map(category=>
                                        <option key={category} value={category}>
                                            {category.toUpperCase()}
                                        </option>
                                        )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-8 d-flex flex-wrap">
                    {
                        products.map(product=>
                            <div className="card m-2 p-2">
                                <img src={product.image} className="card-img-top" height="150px"/>
                                <div className="card-header">
                                    <p>
                                        {product.title}
                                    </p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Reating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-sucess"></span> {product.rating.rate} [{product.rating.count}]
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger">
                                        <span className="bi bi-cart4">Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                            )
                    }
                </main>

            </section>
        </div>
    )
}