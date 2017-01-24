import * as React from 'react';
import restHelper from './utils/restHelper';
import * as moment from 'moment';

class LoginForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            user: "",
            password: ""
        };
    }

    render() {
        return (
            <form onSubmit={this.retrieveData.bind(this)} >
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

    retrieveData = (e: Event) => {
        e.preventDefault();
        if (!this.state.user || !this.state.password) {
            console.log("Auth requirements not satisfied")
        }

        restHelper.summary(this.state.user, this.state.password).then((data: hydra.summaryResponse) => {
            //do shit here


        });

        restHelper.details(this.state.user, this.state.password, moment().toDate(), moment().subtract(30, "days").toDate())
            .then((data: hydra.detailsResponse) => {
                //do shit here


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

export default LoginForm;