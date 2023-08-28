import { useState } from 'react';
import Home from '../../pages/Admin/Home';
import fondo from '../assents/images/fondologin.jpg';

const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [password, setClave] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const handlelogin = (e) => {
        e.preventDefault();
        const data = {
            usuario: usuario,
            password: password
        };

        fetch('http://localhost:45562/api/seguridad/login', {
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
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                    <img className='w-full h-full object-cover' src={fondo} alt="" />
                </div>
                <div className='bg-gray-800 flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>Acceso al sistema</h2>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Usuario:</label>
                            <input onChange={(event) => { setUsuario(event.target.value) }}
                                placeholder='Digitar el usuario'
                                className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                                type="text" />
                        </div>

                        <div className='flex flex-col text-gray-400 py-2'>
                            <label >Clave:</label>
                            <input onChange={(event) => { setClave(event.target.value) }}
                                placeholder='Digitar la clave'
                                className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                                type="password" />
                        </div>

                        <button 
                        className='w-full my-5 py-5 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                        onClick={handlelogin}>Accesar</button>
                    </form>
                </div>

            </div>
        }</>

    );
}

export default Login;

