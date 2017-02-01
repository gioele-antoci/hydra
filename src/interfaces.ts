namespace hydra {

    export enum selectorType {
        temperatureChart,
        dailyConsumption,
        moneyChart
    }

    export interface selectorOption {
        type: selectorType;
        value: string;
        callback: (e: any) => void;
        active?: boolean;
    }

    export interface summaryResponse {
        results: summaryDatum[];
        success: boolean;
    }

    export interface summaryDatum {
        dateFinPeriode: string;
        dateDebutPeriode: string;
        dateDerniereLecturePeriode: string;
        heureDerniereLecturePeriode: string;
        nbJourLecturePeriode: number;
        nbJourPrevuPeriode: number;
        consoTotalPeriode: number;
        consoHautPeriode: number;
        consoRegPeriode: number;
        moyenneKwhJourPeriode: number;
        montantVente: number;
        montantTaxes: number;
        montantFacturePeriode: number;
        moyenneDollarsJourPeriode: number;
        codeConsPeriode: string;
        nbJourDonneeIndisponiblePeriode: number;
        nbJourDonneeReelPeriode: number;
        nbJourDonneeMDMSPeriode: number;
        nbJourDonneeNonMDMSPeriode: number;
        sommeTempPeriode: number;
        tempMoyennePeriode: number;
        nbJoursPeriodeCalcul: number;
        dateDebutPeriodeComparable?: any;
        dateMillieuPeriode: string;
        tauxVariationKwh?: any;
        montantVariationDollars?: any;
        etatVariationTemperature?: any;
        etatVariationDollars?: any;
        etatVariationKwh?: any;
        presenceCodeTarifDTPeriode: boolean;
        dernierTarif?: any;
        nbJourTemperatureEstimee: number;
        zoneMessageHTMLPeriode?: any;
        codeImageBackgroundPeriode: string;
        zoneSommaireVariationHTMLComparaisonKwh?: any;
        zoneMessageHTMLComparaisonCauseKwh?: any;
        zoneMessageTemperature: string;
        zoneSommaireVariationHTMLComparaisonDollars?: any;
        zoneMessageHTMLComparaisonCauseDollars?: any;
        zoneMessageHTMLHistoMensuel?: any;
        zoneMessageHTMLHistoQuotidien?: any;
    }

    export interface detailsResponse {
        results: detailsDatum[]
        success: boolean;
    }

    export interface detailsDatum {
        courant: {
            dateJourConso: string;
            codeJourSemaine: number;
            zoneMessageHTMLQuot?: any;
            codeChangementTarif: string;
            consoRegQuot: number;
            consoHautQuot: number;
            consoTotalQuot: number;
            codeConsoQuot: string;
            tempMoyenneQuot: number;
            codeTarifQuot: string;
            echelleMaxKWh: number;
            echelleMinTemp: number;
            echelleMaxTemp: number;
            codeEvemenentQuot: string;
        }
    }

    //https://www.materialpalette.com/blue/deep-orange
    export class colors {
        static darkPrimaryColor = "#1976D2";
        static defaultPrimaryColor = "#2196F3";
        static lightPrimaryColor = "#BBDEFB";
        static textPrimaryColor = "#FFFFFF";
        static accentColor = "#FF5722";
        static primaryTextColor = "#212121";
        static secondaryTextColor = "#757575";
        static dividerColor = "#BDBDBD";
    }

    export class eletricityCost {
        static fixed = 0.4064;
        static energyUntil30Kwh = 0.0571;
        static energyAfter30Until50Kwh = 0.0868;
        static energyAfter50KwhWinter = 0.621;
        static energyAfter50KwhSummer = 0.378;
    }

    export class sandboxData {
        static detailsData: detailsResponse = {
            "success": true,
            "results": [
                {
                    "courant": {
                        "dateJourConso": "2017-01-30",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 41.69,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 41.69,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -10,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-29",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 37.35,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 37.35,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-28",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 38.39,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 38.39,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-27",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 37.9,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 37.9,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-26",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 37.51,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 37.51,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-25",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 37.3,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 37.3,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-24",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 36.86,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 36.86,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -3,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-23",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 32.24,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 32.24,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-22",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 34.08,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 34.08,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 0,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-21",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 28.46,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 28.46,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-20",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 32.36,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 32.36,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-19",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 34.24,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 34.24,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-18",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 42.22,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 42.22,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -3,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-17",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 43.84,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 43.84,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -3,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-16",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 48.13,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 48.13,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-15",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 58.08,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 58.08,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -9,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-14",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 93.23,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 93.23,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -13,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-13",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 63.51,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 63.51,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -7,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-12",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 21.65,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 21.65,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 3,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-11",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 22.16,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 22.16,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-10",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 29.13,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 29.13,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-09",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 35.42,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 35.42,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -13,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-08",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 32.09,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 32.09,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -16,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-07",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 28.61,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 28.61,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -14,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-06",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 38.33,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 38.33,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -10,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-05",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 39.42,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 39.42,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -7,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-04",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 16.02,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 16.02,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-03",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 19.38,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 19.38,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-02",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 17.5,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 17.5,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2017-01-01",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 24.93,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 24.93,
                        "codeConsoQuot": "X",
                        "tempMoyenneQuot": -5,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-31",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 24.93,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 24.93,
                        "codeConsoQuot": "X",
                        "tempMoyenneQuot": -11,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-30",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 18.07,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 18.07,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -5,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-29",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 19.45,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 19.45,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -3,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-28",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 16.51,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 16.51,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-27",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 16.19,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 16.19,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 3,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-26",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 22.46,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 22.46,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -7,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-25",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 14.14,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 14.14,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -5,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-24",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 14.26,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 14.26,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-23",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 14.64,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 14.64,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-22",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 16.43,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 16.43,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 0,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-21",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 21.65,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 21.65,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-20",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 28.14,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 28.14,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -7,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-19",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 36.32,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 36.32,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -16,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-18",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 38.04,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 38.04,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -8,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-17",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 41.25,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 41.25,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -12,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-16",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 5.26,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 5.26,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -19,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-15",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 3.65,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 3.65,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -14,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-14",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 4.47,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 4.47,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -5,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-13",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 3.59,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 3.59,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-12",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 3.7,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 3.7,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-11",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 4.48,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 4.48,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -7,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-10",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 3.7,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 3.7,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -8,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-09",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 3.74,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 3.74,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -5,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-08",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 3.99,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 3.99,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-07",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 4.16,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 4.16,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-06",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 4.21,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 4.21,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-05",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 4.1,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 4.1,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -3,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-04",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 4.34,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 4.34,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-03",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 4.48,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 4.48,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-02",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 4.68,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 4.68,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-12-01",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 19.13,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 19.13,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 6,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-30",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 31.24,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 31.24,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-29",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 35.71,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 35.71,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-28",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 31.65,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 31.65,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-27",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 30.72,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 30.72,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-26",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 37.4,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 37.4,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-25",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 35.58,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 35.58,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-24",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 30.51,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 30.51,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 0,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-23",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 36.39,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 36.39,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-22",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 37.71,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 37.71,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -1,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-21",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 29.95,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 29.95,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": -2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-20",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 25.06,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 25.06,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-19",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 22.85,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 22.85,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 6,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-18",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 21.04,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 21.04,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-17",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 19.83,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 19.83,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 6,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-16",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 19.87,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 19.87,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 7,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-15",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 24.15,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 24.15,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 7,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-14",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 21.46,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 21.46,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 9,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-13",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 26.72,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 26.72,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 8,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-12",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 39.74,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 39.74,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 3,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-11",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 28.35,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 28.35,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 5,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-10",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 24.48,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 24.48,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 6,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-09",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 22.44,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 22.44,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 6,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-08",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 20.96,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 20.96,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 9,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-07",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 27.94,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 27.94,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-06",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 27.01,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 27.01,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-05",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 24.57,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 24.57,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 6,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-04",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 23.74,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 23.74,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 3,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-03",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 17.17,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 17.17,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 9,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-02",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 17.99,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 17.99,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 11,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-11-01",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 27.01,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 27.01,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 6,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-10-31",
                        "codeJourSemaine": 2,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 26.18,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 26.18,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-10-30",
                        "codeJourSemaine": 1,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 27.35,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 27.35,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 6,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-10-29",
                        "codeJourSemaine": 7,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 31.51,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 31.51,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 5,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-10-28",
                        "codeJourSemaine": 6,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 26.69,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 26.69,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 5,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-10-27",
                        "codeJourSemaine": 5,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 30.31,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 30.31,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-10-26",
                        "codeJourSemaine": 4,
                        "zoneMessageHTMLQuot": null,
                        "codeChangementTarif": "",
                        "consoRegQuot": 27.24,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 27.24,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 2,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": ""
                    }
                },
                {
                    "courant": {
                        "dateJourConso": "2016-10-25",
                        "codeJourSemaine": 3,
                        "zoneMessageHTMLQuot": "<ul class=\"generic\"><li>Début de votre contrat</li>\n</ul>",
                        "codeChangementTarif": "",
                        "consoRegQuot": 22.07,
                        "consoHautQuot": 0,
                        "consoTotalQuot": 22.07,
                        "codeConsoQuot": "R",
                        "tempMoyenneQuot": 4,
                        "codeTarifQuot": "D",
                        "echelleMaxKWh": 93,
                        "echelleMinTemp": -19,
                        "echelleMaxTemp": 11,
                        "codeEvemenentQuot": "X"
                    }
                }
            ]
        };

        static summaryData: summaryResponse = { "success": true, "results": [{ "dateFinPeriode": "2017-02-02", "dateDebutPeriode": "2016-12-02", "dateDerniereLecturePeriode": "2017-01-30", "heureDerniereLecturePeriode": "23:59:00", "nbJourLecturePeriode": 60, "nbJourPrevuPeriode": 63, "consoTotalPeriode": 1507, "consoHautPeriode": 0, "consoRegPeriode": 1507, "moyenneKwhJourPeriode": 25.1, "montantVente": 110.43, "montantTaxes": 16.54, "montantFacturePeriode": 126.97, "moyenneDollarsJourPeriode": 2.12, "codeConsPeriode": "A", "nbJourDonneeIndisponiblePeriode": 0, "nbJourDonneeReelPeriode": 58, "nbJourDonneeMDMSPeriode": 60, "nbJourDonneeNonMDMSPeriode": 0, "sommeTempPeriode": -259, "tempMoyennePeriode": -4, "nbJoursPeriodeCalcul": 60, "dateDebutPeriodeComparable": null, "dateMillieuPeriode": "2016-12-31", "tauxVariationKwh": null, "montantVariationDollars": null, "etatVariationTemperature": null, "etatVariationDollars": null, "etatVariationKwh": null, "presenceCodeTarifDTPeriode": false, "dernierTarif": null, "nbJourTemperatureEstimee": 0, "zoneMessageHTMLPeriode": null, "codeImageBackgroundPeriode": "H", "zoneSommaireVariationHTMLComparaisonKwh": null, "zoneMessageHTMLComparaisonCauseKwh": null, "zoneMessageTemperature": "Température moyenne extérieure pour la période. Elle est obtenue à partir des données fournies par la station météorologique la plus près de chez vous.", "zoneSommaireVariationHTMLComparaisonDollars": null, "zoneMessageHTMLComparaisonCauseDollars": null, "zoneMessageHTMLHistoMensuel": null, "zoneMessageHTMLHistoQuotidien": null }, { "dateFinPeriode": "2016-12-01", "dateDebutPeriode": "2016-10-25", "dateDerniereLecturePeriode": null, "heureDerniereLecturePeriode": null, "nbJourLecturePeriode": 0, "nbJourPrevuPeriode": 38, "consoTotalPeriode": 1030, "consoHautPeriode": 0, "consoRegPeriode": 1030, "moyenneKwhJourPeriode": 27.1, "montantVente": 74.25, "montantTaxes": 11.12, "montantFacturePeriode": 85.37, "moyenneDollarsJourPeriode": 2.25, "codeConsPeriode": "R", "nbJourDonneeIndisponiblePeriode": 0, "nbJourDonneeReelPeriode": 38, "nbJourDonneeMDMSPeriode": 38, "nbJourDonneeNonMDMSPeriode": 0, "sommeTempPeriode": 153.8, "tempMoyennePeriode": 4, "nbJoursPeriodeCalcul": 38, "dateDebutPeriodeComparable": null, "dateMillieuPeriode": "2016-11-12", "tauxVariationKwh": null, "montantVariationDollars": null, "etatVariationTemperature": null, "etatVariationDollars": null, "etatVariationKwh": null, "presenceCodeTarifDTPeriode": false, "dernierTarif": null, "nbJourTemperatureEstimee": 0, "zoneMessageHTMLPeriode": "<p>Événements survenus pendant la période</p><ul class=\"generic\"><li>Début de votre contrat</li>\n</ul>", "codeImageBackgroundPeriode": "A", "zoneSommaireVariationHTMLComparaisonKwh": null, "zoneMessageHTMLComparaisonCauseKwh": null, "zoneMessageTemperature": "Température moyenne extérieure pour la période. Elle est obtenue à partir des données fournies par la station météorologique la plus près de chez vous.", "zoneSommaireVariationHTMLComparaisonDollars": null, "zoneMessageHTMLComparaisonCauseDollars": null, "zoneMessageHTMLHistoMensuel": null, "zoneMessageHTMLHistoQuotidien": null }] };
    }
}

export default hydra;