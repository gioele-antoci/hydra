import * as React from 'react';
import "./css/Header.css";

export default class Header extends React.Component<any, any> {

    render() {
        return (
            <div className="header">
                <span className="logo"><span className="logo-inner">H</span>ydra</span>
                <div className="options">
                    <span className="charts-option option-item active">Charts</span>
                    <span className="account-option option-item">Account</span>
                    <span className="account-option option-item">Triggers</span>
                </div>
            </div>
        )
    }
}