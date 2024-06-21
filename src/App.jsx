import React, { useState } from "react";
import "./App.scss";




const App = () => {
    const [LoginData, setLoginData] = useState({
        Email : "",
        password : ""
    });
    const handelChange = (e) => {
        const {name, value} = e.target;
        setLoginData((prevData) => ({
          ...prevData,
          [name] : value
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login ID :",LoginData);
        alert("login Successfull")
      }

    return(
        <div className="mainbody">
            
            <form className="contantdiv" onSubmit={handleSubmit}>
                <h1 className="myacctitle">My account</h1>
                <div className="spandiv"><span className="signinbox"><u>Sign in</u></span><span className="creatacc">Create An Account</span></div>
                <input type="Email" 
                    name = "Email"
                    value={LoginData.Email}
                    onChange={handelChange}
                className="inputField" placeholder="Username or email address " />
                                
                <br />
                <input type="password"
                    name="password"
                    value={LoginData.password}
                    onChange={handelChange}
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
