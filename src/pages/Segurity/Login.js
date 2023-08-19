import React, { useState } from "react";
import http from "../../http/http-common";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() 
{
    const navigate = useNavigate();
    const [userName, setUserName] = useState("fquesada");
    const [password, setPassword] = useState("0");

    function handleSubmit(event){
        event.preventDefault();

        const loginPayload = {
            usuario : userName,
            clave : password, 
        };

        http
           .post("/token", loginPayload)
           .then((response) => {
              const token = response.data.authorizationToken;

              localStorage.setItem("token", token);

              if(token){
                http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
              }

              navigate("/");
           })
           .catch((err) => console.log(err));
    }

    function handleUserNameChange(event){
        setUserName({ value: event.target.value });
    }

    function handlePasswordChange(event){
        setPassword({ value : event.target.value });
    }

    return(
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <label>
                    Usuario
                    <input type="text" value={userName} onChange={handleUserNameChange}/>
                </label>
                <label>
                    Clave:
                    <input type="text" value={password} onChange={handlePasswordChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Login;
