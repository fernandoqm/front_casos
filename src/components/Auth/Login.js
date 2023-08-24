import { useState } from 'react';
import '../../../src/css/login.css';
import Home from '../../pages/Admin/Home';


const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const handlelogin = (e) => {
        e.preventDefault();
        const data = {
            usuario: usuario,
            clave: clave
        };

        fetch('http://localhost:43387/api/seguridad/Validar', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.token) {
                    localStorage.setItem('token', result.token)
                    setLoginSuccessful(true)
                } else {
                    setLoginSuccessful(false)
                }


            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>{loginSuccessful ? <Home /> :
            <div>
                <form className='login-form'>
                    <label>Usuario:</label>
                    <input onChange={(event) => { setUsuario(event.target.value) }}
                        placeholder='Digitar el usuario'
                        className='input'
                        type="text" />
                    <label >Clave:</label>
                    <input onChange={(event) => { setClave(event.target.value) }}
                        placeholder='Digitar la clave'
                        type="password" />
                    <button onClick={handlelogin}>login</button>
                </form>
            </div>
        }</>

    );
}

export default Login;

