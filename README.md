# Hydra

To login in make POST request to:   
`https://www.hydroquebec.com/portail/web/clientele/authentification?p_auth=EbW90P8A&p_p_id=58&p_p_lifecycle=1&p_p_state=maximized&_58_struts_action=/login/login&_58_action=login`  

with body:

```js
{
   login: username
  _58_password: password  
}
```

To logout make GET request to:   
`https://www.hydroquebec.com/portail/fr/c/portal/logout`

To get a summary of your data make GET request to:  
`https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation?p_p_id=portraitConsommation_WAR_lswrb_INSTANCE_G4WcPdIy6LKl&p_p_lifecycle=2&p_p_resource_id=resourceObtenirDonneesPeriodesConsommation`  
- All the params in the URL are mandatory
- A JSON object is expected as return

To get details of your data make a GET request to   
`https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation?p_p_id=portraitConsommation_WAR_lswrb_INSTANCE_G4WcPdIy6LKl&p_p_lifecycle=2&p_p_resource_id=resourceObtenirDonneesQuotidiennesConsommation&dateDebutPeriode=yyyy-mm-dd&dateFinPeriode=yyyy-mm-dd`
-  `dateDebutPeriode` and `dateFinPeriode` work as expected
- All the params in the URL are mandatory
- A JSON object is expected as return
   
**To further test**   
`http://poweroutages.hydroquebec.com/pannes/donnees/v3_0/bismarkers{yyyymmddhhmmss}.json`

- Replace `{yyyymmddhhmmss}` with the time of the report
- The JSON data structure returned is obfuscated. An array of `pannes` contains the outages   

**Example of an outage**
```
[
    2, 
    "2016-12-17 13:00:21", 
    "2017-01-31 00:15:00",
    "P", 
    "[-61.64773372602691, 47.56419005411159]", 
    "A", 
    "5",
    "58",
    "2510",
     ""
]
```

**Outage JSON item example**   
0. number of people affected
1. outage start date
2. outage end date
3. type (e.g.`p` if is outage)
4. coordinates
5. status
6: ??
7. cause
8. municipalityID
9. idMessage

**Cause code**   
11:"Cause: Equipment failure"  
12:"Cause: Equipment failure"  
13:"Cause: Equipment failure"  
14:"Cause: Equipment failure"  
15:"Cause: Equipment failure"  
21:"Cause: Weather"  
22:"Cause: Weather"  
24:"Cause: Weather"  
25:"Cause: Weather"  
26:"Cause: Weather"  
31:"Cause: Accident or incident"  
32:"Cause: Accident or incident"  
33:"Cause: Accident or incident"  
34:"Cause: Accident or incident"  
41:"Cause: Accident or incident"  
42:"Cause: Accident or incident"  
43:"Cause: Accident or incident"  
44:"Cause: Accident or incident"  
51:"Cause: Damages due to vegetation"  
52:"Cause: Damages due to an animal"  
53:"Cause: Damages due to an animal"  
54:"Cause: Accident or incident"  
55:"Cause: Accident or incident"  
56:"Cause: Accident or incident"  
57:"Cause: Accident or incident"  
58:"Cause: Equipment failure"  
70:"Cause: Equipment failure"   
72:"Cause: Equipment failure"  
73:"Cause: Equipment failure"   
74:"Cause: Equipment failure"   
79:"Cause: Equipment failure"  
defaut:"Cause: Equipment failure"  

**Status code**   

A: "Status: Work assigned"   
L: "Status: Crew at work"  
R: "Status: Crew on its way"  
default: ""