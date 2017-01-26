import * as React from 'react';
import * as moment from 'moment';

import restHelper from './restHelper';
import hydra from './interfaces';

import './css/Login.css';

class Login extends React.Component<{ callback: (code: number) => void }, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: "",
            password: ""
        };
    }

    render() {
        return (
            <form onSubmit={this.login.bind(this)} >
                <LoginInput type="text" placeholder="Enter username" onChange={this.handleUsernameChange} />
                <LoginInput type="password" placeholder="Enter password" onChange={this.handlePasswordChange} />
                <button type="submit">GO</button>
            </form >)
    }

    handleUsernameChange = (e: Event) => {
        this.setState({ user: (e.target as HTMLElement).value });
    }
    handlePasswordChange = (e: Event) => {
        this.setState({ password: (e.target as HTMLElement).value });
    }

    login = (e: Event) => {
        e.preventDefault();
        if (!this.state.user || !this.state.password) {
            console.log("Auth requirements not satisfied")
        }

        restHelper.login(this.state.user, this.state.password).then(code => {
            this.props.callback(code);
        });        
    }
}

class LoginInput extends React.Component<any, any> {
    render() {
        return (
            < input type={this.props.type} onChange={this.props.onChange.bind(this)} placeholder={this.props.placeholder} />
        )
    }
}

export default Login;