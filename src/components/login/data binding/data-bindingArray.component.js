
export function DataBinding2Component()
{
    var categories=['All','Electronics','Footwear','Fashion'];
    return(
        <div className="container-fluid">
            <h2>Arrays</h2>
            <ol>
                {
                    categories.map(category=>
                        <li key={category}>{category}</li>
                        )
                }
            </ol>
            <select>
                {
                    categories.map(category=>
                        <option key={category}>{category}</option>
                        )
                }
            </select>
            <ul className="list-unstyled">
                {
                    categories.map(category=>
                        <li key={category}><input type="checkbox"/> {category}</li>
                        )
                }
            </ul>
            <div>
                {
                    categories.map(category=>
                        <div key={category}>
                            <button  className="w-25">{category}</button>
                        </div>
                        )
                }
            </div>
        </div>
    )
}