import * as React from 'react';
import * as moment from 'moment';

import restHelper from './restHelper';
import hydra from './interfaces';

import './css/Login.css';

class Login extends React.Component<any, { user: string, password: string }> {
    constructor(props: any) {
        super(props);

        //autologin for debug purposes
        const localCredentials = localStorage.getItem("credentials");
        if (localCredentials) {
            const parsedCredentials = JSON.parse(localCredentials);
            this.state = { user: parsedCredentials.user, password: parsedCredentials.password };

            this.login();
        }

        else {
            this.state = {
                user: "",
                password: ""
            };
        }
    }


    render() {
        return (
            <div className="Login">
                <video className="home-video" autoPlay muted loop poster={require("../public/dripping-tap.jpg")}>
                    <source src={require("../public/dripping-tap.mp4")} type="video/mp4" />
                    <source src={require("../public/dripping-tap.webm")} type="video/webm" />
                    <source src={require("../public/dripping-tap.ogv")} type="video/ogg" />
                </video>
                <div className="title-container">
                    <div className="title-label">Hydra</div>
                    <div className="title-description">Curious how much leaving your tap open costs you?</div>
                </div>
                <div className="login-container">
                    <form className="login-form" onSubmit={this.login.bind(this)} >
                        <div className="login-form-label">Enter the credentials you use for HydroQuebec's' online portal</div>
                        <LoginInput type="text" placeholder="Enter username" onChange={this.handleUsernameChange} />
                        <LoginInput type="password" placeholder="Enter password" onChange={this.handlePasswordChange} />
                        <button className="btn btn-large" type="submit">Show me</button>
                    </form>
                </div>
            </div>)
    }

    handleUsernameChange = (e: Event) => {
        this.setState({ user: (e.target as HTMLInputElement).value });
    }
    handlePasswordChange = (e: Event) => {
        this.setState({ password: (e.target as HTMLInputElement).value });
    }

    login = (e?: Event) => {

        if (e) {
            e.preventDefault();
        }

        if (!this.state.user || !this.state.password) {
            console.log("Auth requirements not satisfied");
            return;
        }

        restHelper.login(this.state.user, this.state.password)
            .then(() => {
                localStorage.setItem("credentials", JSON.stringify({ user: this.state.user, password: this.state.password }));
                this.props.router.replace("/home");
            });
    }
}

class LoginInput extends React.Component<any, any> {
    render() {
        return (
            < input type={this.props.type} onChange={this.props.onChange.bind(this)} placeholder={this.props.placeholder} autoFocus={this.props.type === "text"} />
        )
    }
}

export default Login;