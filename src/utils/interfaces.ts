declare module hydra {
    export interface summaryResponse {
        results: summaryData[]
        success: boolean;
    }

    export interface summaryData {
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
        results: detailsData[]
        success: boolean;
    }

    export interface detailsData {
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
}