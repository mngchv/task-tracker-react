import React from "react";
import InputField from "../components/InputField";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Cover from "../components/Cover";


function Login() {
    return (
        <Cover>
            <Header>
                Log in to your account.
            </Header>
            <form>
                    <InputField placeholder="Login" type="text" label="Login:" onChange={e => e.target.value}
                                onBlur={e => e.target.value.trim()}>
                    </InputField>
                    <InputField placeholder="Password" type="password" label="Password:"
                                onChange={() => console.log("Content in password field has changed")}
                                onBlur={e => e.target.value.trim()}>
                    </InputField>
                <Buttons>Sign Up</Buttons>
            </form>
        </Cover>
    );
}

export default Login;
