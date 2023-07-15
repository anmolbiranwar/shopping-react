import { useEffect, useState } from "react"
import axios from "axios";
export function ShoppingComponent()
{
    const[categories, setCategories]=useState([]);
    
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
                            <select className="form-select">

                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-8">

                </main>

            </section>
        </div>
    )
}