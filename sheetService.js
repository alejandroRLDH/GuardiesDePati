
/*
    No tocar
    Les següents línies es connecten amb google per comprovar que l'usuari és correcte i quina informació de la seva sessió
    es descarregarà. Una vegada autenticat correctament es descarrega un token que es guarda a
    la sessió del navegador (localStorage). Després per fer cada consulta s'enviarà aquest token per comprovar que l'usuari
    encara està autenticat correctament.
 */

async function getDadesUsuari(){
    const peticioFetch = await fetch("https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses\n",{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem('token') //'Afegir 'Bearer '+ localS
        }
    })
    const resultat = await peticioFetch.json();
    console.log(`Rebudes dades de l'usuari`)
    console.log(resultat)
    return resultat;
}

async function getDadesFila(rang){
    const peticioFetch = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1XmS4EsZRTMp4AQ4MXUp5MqufLRUbtFl96EpGbw2-WGg/values/"+rang+"?majorDimension=COLUMNS",{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem('token') //'Afegir 'Bearer '+ localS
        }
    })
    const resultat = await peticioFetch.json();
    return resultat.values;
}

async function getDadesColumna(rang){
    const peticioFetch = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1XmS4EsZRTMp4AQ4MXUp5MqufLRUbtFl96EpGbw2-WGg/values/"+rang,{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem('token') //'Afegir 'Bearer '+ localS
        }
    })
    const resultat = await peticioFetch.json();
    return resultat.values;
}

/*FI no tocar*/