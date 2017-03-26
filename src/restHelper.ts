import * as request from "request-promise";
import * as moment from 'moment';
import hydra from './interfaces';

class restHelper {
    static serverURI = restHelper.isProduction() ? "https://hydra-qc-server.herokuapp.com" : "http://localhost:3001";
    private static _user: string;
    private static _password: string;
    private static _loggedIn = false;
    private static _sandboxMode = false;

    static isLoggedIn(): boolean {
        return this._loggedIn;
    }

    static isProduction() {
        return process.env.NODE_ENV === "production";
    }

    static isDebug() {
        return process.env.NODE_ENV !== "production";
    }

    static setSandbox() {
        this._sandboxMode = true;
    }

    static isSandbox(): boolean {
        return this._sandboxMode;
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
                .catch(reason => rej(reason));
        });
    }

    static summary(): Promise<hydra.summaryResponse> {
        if (this._sandboxMode) {
            return Promise.resolve(hydra.sandboxData.summaryData);
        }

        else if (!this.isLoggedIn()) {
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
        if (this._sandboxMode) {
            const startMom = moment(start).startOf('day');
            const endMom = moment(end).startOf('day');
            const data = JSON.parse(JSON.stringify(hydra.sandboxData.detailsData));
            data.results = hydra.sandboxData.detailsData.results.filter(value => {
                const mom = moment(value.courant.dateJourConso);
                return mom.isSameOrAfter(startMom) && mom.isSameOrBefore(endMom);
            });

            return Promise.resolve(data);
        }

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

    static temperatureSanitizer(datum: hydra.detailsDatum): number {
        if (Math.abs(datum.courant.tempMoyenneQuot) > 100) {
            return (datum.courant.echelleMaxTemp + datum.courant.echelleMinTemp) / 2;
        }
        else {
            return datum.courant.tempMoyenneQuot;
        }
    }
}

export default restHelper;