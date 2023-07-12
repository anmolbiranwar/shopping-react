
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
        </div>
    )
}