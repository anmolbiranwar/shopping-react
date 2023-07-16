import { useState } from "react"
import "./classdemo.component.css"

export function ClassBindingDemo()
{
    const [theme, setTheme]=useState('');
    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('dark-theme');
        }else{
            setTheme('');
        }
    }
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'400px'}}>
            <form className={theme}>
                <div className="form-switch">
                    <input type="checkbox" onChange={handleThemeChange} className="form-check-input"/> Dark Mode
                </div>
                <h3><span className="bi bi-person-fill"></span>User Name</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="number" className="form-control"/></dd>
                </dl>
                <button className="btn btn-dark w-100">Login</button>
         </form>
        </div>
    )
}