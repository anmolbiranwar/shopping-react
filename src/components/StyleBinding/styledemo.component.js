import { useState } from "react"

export function StyleDemoComponent()
{
    const [styleObject, setStyleObject]=useState({border:"", boxshadow:""});
    const [userError,setUserError]=useState("");
    
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"/></dd>
            </dl>
        </div>
    )
}