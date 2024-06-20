import React from "react";
import "./App.scss";




const App = () => {
    return(
        <div className="mainbody">
            
            <form className="contantdiv">
                <h1 className="myacctitle">My account</h1>
                <div className="spandiv"><span className="signinbox"><u>Sign in</u></span><span className="creatacc">Create An Account</span></div>
                <input type="text" className="inputField" placeholder="Username or email address " name="name"/>
                                
                <br />
                <input type="password" className="inputFieldpassword" placeholder="password" />
                <br />
                
                <input type="checkbox" name="checkbox1" id="checkbox1" className="checkbox"/>
                <label for="checkbox1">Remember me</label>
                <br />
                
                <input type="submit" className="passBut"  value="SIGN IN" />
                <br />

            </form>
            

            
            
        </div>
    )
}

export default App
