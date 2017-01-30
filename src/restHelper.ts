import * as request from "request-promise";
import hydra from './interfaces';

class restHelper {
    static serverURI = process.env.NODE_ENV === "production" ? "https://hydra-qc-server.herokuapp.com" : "http://localhost:3001";
    private static _user: string;
    private static _password: string;
    private static _loggedIn = false;

    static isLoggedIn(): boolean {
        return this._loggedIn;
    }

    static login(user: string, password: string): Promise<{}> {
        const uri = `${this.serverURI}/login`;
        let code = 500;
        return new Promise((res, rej) => {
            request(
                {
                    uri,
                    method: "POST",
                    body: JSON.stringify({ user: user, password: password }),
                    headers: {
                        "content-type": 'application/json'
                    }
                })
                .then(() => {
                    this._user = user;
                    this._password = password;
                    this._loggedIn = true;
                    res();
                })
                .catch(() => {
                    rej();
                });
        });
    }


    static summary(): Promise<hydra.summaryResponse> {
        if (!this.isLoggedIn()) {
            return null;
        }

        const uri = `${this.serverURI}/data/summary`;
        return new Promise((res, rej) => {
            request(
                {
                    uri,
                    method: "POST",
                    body: JSON.stringify({ user: this._user, password: this._password }),
                    headers: {
                        "content-type": 'application/json'
                    },
                })
                .then(value => {
                    res(JSON.parse(value));
                })
                .catch(error => rej(error));
        });
    }

    static details(start: Date, end: Date): Promise<hydra.detailsResponse> {
        if (!this.isLoggedIn()) {
            return null;
        }

        const uri = `${this.serverURI}/data/details`;
        const data = JSON.stringify({ user: this._user, password: this._password, start, end });

        return new Promise((res, rej) => {
            request(
                {
                    uri,
                    method: "POST",
                    body: data,
                    headers: {
                        "content-type": 'application/json'
                    },
                })
                .then(value => {
                    res(JSON.parse(value));
                })
                .catch(error => rej(error));
        });
    }
}

export default restHelper;