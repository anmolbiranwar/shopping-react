
import { useState } from "react"

export function TwowayDataBinding1()
{
    const[Name, setName]=useState("");
    const[Price,setPrice]=useState(0);
    const[City,setCity]=useState("");
    const[Stock,setStock]=useState(false);

    function NameChange(e){
        setName(e.target.value);
    }
    function PriceChange(e){
        setPrice(e.target.value);
    }
    function CityChange(e){
        setCity(e.target.value);
    }
    function StockChange(e){
        setStock(e.target.checked);
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input onChange={NameChange} type="text"/></dd>
                        <dt>Price</dt>
                        <dd><input onChange={PriceChange} type="number"/></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={CityChange}>
                                <option>Gondia</option>
                                <option>Nagpur</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input onChange={StockChange} type="checkbox" className="form-check-input"/> Available
                        </dd>
                    </dl>
                </div>
                <div className="col-9">
                    <h2>Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{Name}</dd>
                        <dt>Price</dt>
                        <dd>{Price}</dd>
                        <dt>City</dt>
                        <dd>{City}</dd>
                        <dt>Stock</dt>
                        <dd>{(Stock==true)?"Available":"Out of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}