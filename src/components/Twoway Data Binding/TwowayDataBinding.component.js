import { useState } from "react"

export function DataBinding2wayComponent()
{
    const[userName,setUserName]=useState("Anmol");
        function HandleUserName(e){
            setUserName(e.target.value);
        }
    return(
        <div>
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={HandleUserName}/></dd>
            </dl>
            <p>Hello ! {userName}</p>
        </div>

    )
}