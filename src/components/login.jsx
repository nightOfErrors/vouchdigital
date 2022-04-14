import { Input } from 'antd';
import { Button } from 'antd';
import { Checkbox } from 'antd';
import { useState } from 'react';

import '../logincolumn.css';

const Login = () => {

    const [userData, setUserData] = useState()

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }


    const loginDetails = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUserData({ ...userData, [name] : value })
    }

    const submitUserData = () => {

        const url = "https://reqres.in/api/login";

        const parameters = {
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(userData)
        }

        try {
            fetch(url, parameters).then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(data)
                alert(JSON.stringify(data))
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div id="loginColumn" align="center">

            <div id="loginInnerColumn">
                <div>
                    <b><p id="welcomeText">Welcome Back</p></b>
                    <br />
                    <b><p id="subHeading">Sub-title text goes here</p></b>
                    <div>

                        <Input name="email" onChange={loginDetails} placeholder="Email Address *" className="inputDimentions" /><br />
                        <Input name="password" onChange={loginDetails} placeholder="Password *" className="inputDimentions" type="password" /><br />
                        <Button onClick={submitUserData} type="primary" id="loginSubmitButton">Login</Button>
                        
                        <div id="loginExtras">

                            <div style={{display:'flex', float:'left'}}>
                                <Checkbox onChange={onChange} />
                                <b><p id="extraDetailsCheck">Remember Password</p></b>
                            </div>
                            <b><p id="extraDetailsForgot">Forgot Password?</p></b>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;