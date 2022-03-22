import React from "react";
import InputField from "../components/InputField";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Cover from "../components/Cover";


function Registration() {
    return (
        <Cover>
            <Header>
                Create your account.
            </Header>
            <form>
                <InputField placeholder="Email" type="text" label="Email:" onChange={e => e.target.value}
                            onBlur={e => e.target.value.trim()}>
                </InputField>

                <InputField placeholder="firstName" type="text" label="First name:" onChange={e => e.target.value}
                            onBlur={e => e.target.value.trim()}>
                </InputField>

                <InputField placeholder="lastName" type="text" label="Last name:" onChange={e => e.target.value}
                            onBlur={e => e.target.value.trim()}>
                </InputField>

                <InputField placeholder="Password" type="password" label="Password:"
                            onChange={() => console.log("Content in password field has changed")}
                            onBlur={e => e.target.value.trim()}>
                </InputField>

                <InputField placeholder="fileInput" type="file" accept="image/png, image/jpeg" label="Add avatar" onChange={e => e.target.value}
                            onBlur={e => e.target.value.trim()}>
                </InputField>

                <Buttons>Sign in</Buttons>
            </form>
        </Cover>
    );
}

export default Registration;