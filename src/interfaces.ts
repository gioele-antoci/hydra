namespace hydra {

    export enum selectorType {
        temperatureChart,
        dailyConsumption
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
}

export default hydra;