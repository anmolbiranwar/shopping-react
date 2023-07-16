
export function StyleDemo1Component()
{
    return(
        <div className="contianer-fluid">
            <h2>Choose Style</h2>
            <dl>
                <dt>Background Color</dt>
                <dd>
                    <select>
                        <option>Yellow</option>
                        <option>Green</option>
                        <option>Red</option>
                    </select>
                </dd>
                <dt>Text Align</dt>
                <dd>
                    <select>
                        <option>Left</option>
                        <option>Center</option>
                        <option>Right</option>
                    </select>
                </dd>
            </dl>
            <h1>Sample Text</h1>
        </div>
    )
}