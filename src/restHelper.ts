import * as request from "request-promise";

class restHelper {
    static debugServerURI = "http://localhost:3001";
    private static _user: string;
    private static _password: string;
    private static _loggedIn = false;

    static isLoggedIn(): boolean {
        return this._loggedIn;
    }

    static login(user: string, password: string): Promise<number> {
        const uri = `${this.debugServerURI}/login`;
        let code = 500;
        request(
            {
                uri,
                method: "POST",
                body: JSON.stringify({ user: user, password: password })
            })
            .then(code => {
                if (code === 200) {
                    this._user = user;
                    this._password = password;
                    this._loggedIn = true;
                }
            });

        return Promise.resolve(code);
    }


    static summary(): request.RequestPromise {
        if (!this.isLoggedIn()) {
            return null;
        }

        const uri = `${this.debugServerURI}/data/summary`;
        return request(
            {
                uri,
                method: "POST",
                body: JSON.stringify({ user: this._user, password: this._password }),
                headers: {
                    "content-type": 'application/json'
                },
            });
    }

    static details(start: Date, end: Date): request.RequestPromise {
        if (!this.isLoggedIn()) {
            return null;
        }

        const uri = `${this.debugServerURI}/data/details`;
        const data = JSON.stringify({ user: this._user, password: this._password, start, end });
        return request(
            {
                uri,
                method: "POST",
                body: data,
                headers: {
                    "content-type": 'application/json',
                }
            });
    }
}

export default restHelper;