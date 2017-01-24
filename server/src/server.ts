"use strict";

import request = require('request');
import bodyParser = require('body-parser')
import cors = require('cors')

import Promise = require("bluebird");
import express = require('express')

import moment = require('moment')

var app = express();
app.use(cors());
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
bodyParser.urlencoded({ extended: true });

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
request.defaults({ "proxy": 'http://127.0.0.1:8888' });

const login = (user: string, password: string) => {
    return new Promise<string>((resolve, reject) => {
        request.post(
            {
                url: `https://www.hydroquebec.com/portail/web/clientele/authentification?p_auth=EbW90P8A&p_p_id=58&p_p_lifecycle=1&p_p_state=maximized&_58_struts_action=/login/login&_58_action=login`,
                body: `login=${user}&_58_password=${password}`,
                // mode: "no-cors",
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
            }, (error, response, body) => {
                if (error) {
                    reject(response);
                    return;
                }
                var cookieString = "";
                var cookieArray: string[] = response.headers['set-cookie'];
                cookieArray.forEach(cookie => {
                    cookie = cookie.split(";").filter(x => x.indexOf("JSESSIONID") !== -1).toString();
                    if (cookie && cookieString.indexOf(cookie) === -1) {
                        cookieString += cookie + ";"
                    }
                });

                request.get({
                    url: `https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation`,
                    method: "GET",
                    headers: {
                        'Cookie': cookieString
                    }
                }, (error, response, body) => {
                    if (error) {
                        reject(response);
                        return;
                    }
                    resolve(cookieString);
                });
            });
    });
}

const getSummaryData = (cookie: string) => {
    return new Promise((resolve, reject) => {
        request.get({
            url: `https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation?p_p_id=portraitConsommation_WAR_lswrb_INSTANCE_G4WcPdIy6LKl&p_p_lifecycle=2&p_p_resource_id=resourceObtenirDonneesPeriodesConsommation`,
            method: "GET",
            headers: {
                'Cookie': cookie
            }
        }, (error, response, body) => {
            if (!error) {
                resolve(body);
                return;
            }
            else {
                reject(response);
                return;
            }
        });
    });
}

const getDetailsData = (cookie: string, start: Date, end: Date) => {
    return new Promise((resolve, reject) => {
        request.get({
            url: `https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation?p_p_id=portraitConsommation_WAR_lswrb_INSTANCE_G4WcPdIy6LKl&p_p_lifecycle=2&
            p_p_resource_id=resourceObtenirDonneesQuotidiennesConsommation&dateDebutPeriode=${moment(start).format("YYYY-MM-DD")}&dateFinPeriode=${moment(end).format("YYYY-MM-DD")}`,
            method: "GET",
            headers: {
                'Cookie': cookie
            }
        }, (error, response, body) => {
            if (!error) {
                resolve(body);
                return;
            }
            else {
                reject(response);
                return;
            }
        });
    });
}


app.post('/data/summary', (req, res) => {
    const body = req.body;

    login(body.user, body.password)
        .then(cookie => {
            getSummaryData(cookie).then(val => {
                res.contentType("application/json");
                res.send(val);
            });
        });
});

app.post('/data/details', (req, res) => {
    const body = req.body;

    login(body.user, body.password)
        .then(cookie => {
            getDetailsData(cookie, body.start, body.end).then(val => {
                res.contentType("application/json");
                res.send(val);
            });
        });
});

app.listen("3001", function () {
    console.log('Server listening')
});
