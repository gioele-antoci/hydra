var request = require('request');
var bodyParser = require('body-parser');
var cors = require('cors');
var Promise = require("bluebird");
var express = require('express');
var moment = require('moment');
var app = express();
app.use(cors());
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
bodyParser.urlencoded({ extended: true });
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
request = request.defaults({ "proxy": 'http://127.0.0.1:8888' });
var login = function (user, password) {
    return new Promise(function (resolve, reject) {
        request.post({
            url: "https://www.hydroquebec.com/portail/web/clientele/authentification?p_auth=EbW90P8A&p_p_id=58&p_p_lifecycle=1&p_p_state=maximized&_58_struts_action=/login/login&_58_action=login",
            body: "login=" + user + "&_58_password=" + password,
            // mode: "no-cors",
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
        }, function (error, response, body) {
            if (error) {
                reject(response);
                return;
            }
            var cookieString = "";
            var cookieArray = response.headers['set-cookie'];
            cookieArray.forEach(function (cookie) {
                cookie = cookie.split(";").filter(function (x) { return x.indexOf("JSESSIONID") !== -1; }).toString();
                if (cookie && cookieString.indexOf(cookie) === -1) {
                    cookieString += cookie + ";";
                }
            });
            request.get({
                url: "https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation",
                method: "GET",
                headers: {
                    'Cookie': cookieString
                }
            }, function (error, response, body) {
                if (error) {
                    reject(response);
                    return;
                }
                resolve(cookieString);
            });
        });
    });
};
var getSummaryData = function (cookie) {
    return new Promise(function (resolve, reject) {
        request.get({
            url: "https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation?p_p_id=portraitConsommation_WAR_lswrb_INSTANCE_G4WcPdIy6LKl&p_p_lifecycle=2&p_p_resource_id=resourceObtenirDonneesPeriodesConsommation",
            method: "GET",
            headers: {
                'Cookie': cookie
            }
        }, function (error, response, body) {
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
};
var getDetailsData = function (cookie, start, end) {
    return new Promise(function (resolve, reject) {
        request.get({
            url: "https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation?p_p_id=portraitConsommation_WAR_lswrb_INSTANCE_G4WcPdIy6LKl&p_p_lifecycle=2&p_p_resource_id=resourceObtenirDonneesQuotidiennesConsommation&dateDebutPeriode=" + moment(end).format("YYYY-MM-DD") + "&dateFinPeriode=" + moment(start).format("YYYY-MM-DD"),
            method: "GET",
            headers: {
                'Cookie': cookie
            }
        }, function (error, response, body) {
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
};
app.post('/data/summary', function (req, res) {
    var body = req.body;
    login(body.user, body.password)
        .then(function (cookie) {
        getSummaryData(cookie).then(function (val) {
            res.contentType("application/json");
            res.send(val);
        });
    });
});
app.post('/data/details', function (req, res) {
    var body = req.body;
    login(body.user, body.password)
        .then(function (cookie) {
        getDetailsData(cookie, body.start, body.end).then(function (val) {
            res.contentType("application/json");
            res.send(val);
        });
    });
});
app.listen("3001", function () {
    console.log('Server listening');
});
//# sourceMappingURL=server.js.map