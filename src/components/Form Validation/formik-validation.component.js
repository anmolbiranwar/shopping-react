
export function FormikValidation()
{
    return(
        <div className="container-fluid">
            <h2>Register</h2>
        <form>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"/></dd>
                <dt>Age</dt>
                <dd><input type="text"/></dd>
                <dt>Mobile</dt>
                <dd><input type="text"/></dd>
            </dl>
            <button>Register</button>
        </form>
        </div>
    )
}