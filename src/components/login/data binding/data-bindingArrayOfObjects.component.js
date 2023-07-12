
export function Databinding3Component()
{   
    var products=[
        {Name:"TV", Price:45000.00,Stock:true},
        {Name:"Mobile",Price:34000, Stock:false},
        {Name:"Nike Casuals", Price:2500, Stock:true}
    ];
    return(
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock==true)?"Available":"Out of stock"}</td>
                                <td>
                                    <button className="btn btn-info"><span className="bi bi-eye-fill"></span></button>
                                    <button className="btn btn-warning ms-2"><span className="bi bi-pen"></span></button>
                                    <button className="btn btn-danger ms-2"><span className="bi bi-trash"></span></button>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>

    )
}