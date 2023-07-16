import { useState } from "react"

export function StyleDemo1Component()
{
    const [styleObject, setStyleObject]= useState({backgroundColor:'', textAlign:''});

    function backgroundChange(e){
        setStyleObject({
            backgroundColor:e.target.value,
            textAlign:styleObject.textAlign
        });
    }
    function alignChange(e){
        setStyleObject({
            textAlign:e.target.value,
            backgroundColor:styleObject.backgroundColor
        });
    }
    return(
        <div className="contianer-fluid">
            <h2>Choose Style</h2>
            <dl>
                <dt>Background Color</dt>
                <dd>
                    <select onChange={backgroundChange}>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                    </select>
                </dd>
                <dt>Text Align</dt>
                <dd>
                    <select onChange={alignChange}>
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </dd>
            </dl>
            <h1 style={styleObject}>Sample Text</h1>
        </div>
    )
}