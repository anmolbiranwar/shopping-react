import { useFormik } from "formik";
import * as yup from "yup";

export function FormikValidation()
{
    const formik=useFormik({
        initialValues:{
            UserName:"",
            Age:0,
            Mobile:""
        },
        validationSchema: yup.object({
            UserName: yup.string()
            .required("User Name Required")
            .min(4,"Name too short min 4 chars")
            .max(10,"Name too long max 10 chars"),
            Age: yup.number()
            .required("Age Required"),
            Mobile: yup.string()
            .required("Mobile Required")
            .matches(/\+91\d{10}/,"Invalid Mobile +91 and 10 digits")
        }),
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
        }
    })
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