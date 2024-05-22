import React, {useState} from 'react';
import axios from "axios";

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')

    const login = () => {
        axios.get('http://localhost/index2.php', {
            params: {
                username: userName,
                password: password
            }
        }).then((res) => {
            setMessage(res.data)
            console.log(res.data)
        })
    }


    return (
        <div
            className={'mt-14 rounded-2xl px-12 py-24 flex flex-col gap-4 items-center justify-center bg-gray-100 mx-auto container'}>

            <div>
                <h1 className={'text-4xl font-bold'}>Login</h1>
                <p className={'text-lg'}>Enter your credentials to login</p>
            </div>
            <div className={'flex flex-col gap-2'}>
                <label className={'text-lg'}>Username </label>
                <input className={'border-2 border-gray-300 rounded-lg px-4 py-2'} name={'username'}
                       onChange={(e) => setUserName(e.target.value)}
                />

                <label className={'text-lg'}>Password </label>
                <input className={'border-2 border-gray-300 rounded-lg px-4 py-2'} name={'password'}
                       onChange={(e) => setPassword(e.target.value)}/>

                <button name={'login'} className={'bg-indigo-500 text-white rounded-lg px-4 py-2'} onClick={() => {
                    login()
                }}>Login
                </button>
            </div>

            <div>
                Message From Server
                <p>{message.message}</p><br/>
                <p>{message.status}</p>
            </div>

        </div>
    );
};

export default Login;
