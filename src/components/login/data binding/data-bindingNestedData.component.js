
export function DataBinding4Component()
{
    var menu=[
        {Category:"Electronics", Product:["TV","Mobile"]},
        {Category:"Footwear", Product:["Nike Casuals","Lee Boot"]}
    ];
    return(
        <div className="container-fluid">
            <h2>Shopping Menu</h2>
            <ol>
                {
                    menu.map(item=>
                        <li key={item.Category}>
                            {item.Category}
                            <ul>
                                {
                                    item.Product.map(product=>
                                        <li key={product}>{product}</li>
                                        )
                                }
                            </ul>
                            </li>
                        )
                }
            </ol>
            <h2>Select Product</h2>
            <select>
                {
                    menu.map(item=>
                        <optgroup label={item.Category} key={item.Category}>
                            {
                                item.Product.map(product=>
                                    <option key={product}>{product}</option>
                                    )
                            }
                        </optgroup>
                        )
                }
            </select>
            <h2>Select Category</h2>
            {
                menu.map(item=>
                    <details key={item.Category}>
                        <summary>{item.Category}</summary>
                        <ul>
                           {
                             item.Product.map(product=>
                                <li key={product}>{product}</li>
                                )
                           }
                        </ul>
                    </details>
                    )
            }
        </div>
    )
}