import * as request from "request-promise";

class restHelper {
    static debugServerURI = "http://localhost:3001";

    static summary(user: string, password: string):request.RequestPromise {
        const uri = `${this.debugServerURI}/data/summary`;
        return request(
            {
                uri,
                method: "POST",
                body: JSON.stringify({ user: user, password: password }),
                headers: {
                    "content-type": 'application/json',
                },
            });
    }

    static details(user: string, password: string, start: Date, end: Date):request.RequestPromise {
        const uri = `${this.debugServerURI}/data/details`;
        return request(
            {
                uri,
                method: "POST",
                body: JSON.stringify({ user, password, start, end }),
                headers: {
                    "content-type": 'application/json',
                },
            });
    }
}

export default restHelper;