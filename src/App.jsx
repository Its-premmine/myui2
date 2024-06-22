import React from "react";
import "./App.scss";
import { useFormik } from "formik";

const initialValues = {
    email: "",
    password: ""
    
}

const App = () => {
    const {values,handleSubmit,handleChange} = useFormik({
        initialValues : initialValues,
        onSubmit : (values) => {
            console.log(values);
            alert("login successful")
        }
    })

    return(
        <div className="mainbody">
            
            <form className="contantdiv" onSubmit={handleSubmit}>
                <h1 className="myacctitle">My account</h1>
                <div className="spandiv"><span className="signinbox"><u>Sign in</u></span><span className="creatacc">Create An Account</span></div>
                <input type="email" 
                    name = "email"
                    value={values.email}
                    onChange={handleChange}
                className="inputField" placeholder="Username or email address " />
                                
                <br />
                <input type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                className="inputFieldpassword" placeholder="password" />
                <br />
                
                <input type="checkbox" name="checkbox1" id="checkbox1" className="checkbox"/>
                <label htmlFor="checkbox1" className="checkbox">Remember me</label>
                <br />
                
                <input type="submit" className="passBut"  value="SIGN IN" />
                <br />

            </form>
            

            
            
        </div>
    )
}

export default App
