
export function DataBindingComponent()
{
    var product={
        Name:"Samsung TV",
        Price:45550.44,
        Stock:true
    }
    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dd><input type="text" value={product.Name} /></dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock==true)?"Available":"Out of stock"}</dd>
            </dl>
        </div>
    )
}