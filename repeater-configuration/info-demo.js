// de "$.getJSON" functie zet voor ons de json, om in een
// mooi JavaScript Object en geeft die door aan de "logInfoData"
// functie die we meegeven in de parameters, zie
// https://api.jquery.com/jQuery.getJSON/
// voor prima jQuery API documentatie:
$.getJSON("repeater-info-pi2nos.json", logInfoData);

// Voorbeeld voor het benaderen/gebruiken van de repeater info:
function logInfoData( info ) {

    // De variable "info" heeft hier de repeater info, in een
    // "array van arrays". Alle informatie is daardoor
    // makkelijk te benaderen. De naam van de ontvanger in Utrecht
    // is als volgt te vinden:
    var name = info.rx.Rx_Utrecht.name;
    console.log("Naam ontvanger Utrecht : "+name);

    // In de config file hebben alleen de antennes een locatie.
    // Om de locatie van de antenne van de onvanger in Utrecht
    // te vinden, zoeken we eerst in de ontvanger de naam van
    // de antenne op:
    var antenneNaam = info.rx.Rx_Utrecht.antenna;
    console.log("Variabelenaam antenne Utrecht : "+antenneNaam);

    // Vervolgens vinden we bijbehorende antenne door de naam
    // op te zoeken in de antenne lijst:
    var antenna = info.antenna[antenneNaam];
    console.log("Antenne object",antenna);

    // Vervolgens kunnen we de locatie van deze antenne
    // als volgt vinden:
    var location = antenna.location;
    console.log("Latitude : " + location.lat);
    console.log("Longitude : " + location.lon);
    console.log("Altitude (meters above sea level) : " + location.alt);

    // Javascript tip: met "Debugger" zet je een breakpoint. Het programma
    // pauzeert hier als je de debugger hebt geopend (Firefox, Chrome en
    // Safari hebben prima javascript debuggers)
    debugger;

    // Itereren over bijvoorbeeld alle ontvangers om de naam
    // weer te geven kan in vaste volgorde zoals in Rob's code,
    // maar kan ook door direct over de Objecten te itereren.
    // Strict genomen is bij deze manier de volgorde niet
    // gegarandeerd maar in de praktijk is het altijd de volgorde
    // waarin de elementen in de array staan:
    for (var item in info.rx) {
        // "item" bevat nu de naam van een property in info.rx,
        // dus wel moeten met die naam het object opzoeken:
        var receiver = info.rx[item]
        console.log("Ontvanger " + receiver.name +
                    " luistert op " + receiver.input_freq + " Mhz.");
    }

    // De oplettende lezer ziet dat de "Daily_Minutes" ontvanger op
    // een "undefined" frequentie luistert. Detecteren van properties
    // die wel of niet bestaan kan makkelijk worden getest doordat
    // "undefined" in een if statement altijd "false" retourneert:
    if ( ! pipo ) {
        console.log("Variabele pipo was niet gedefinieerd.")
    }

    var pipo = "heeft een fopneus";
    if ( pipo ) {
        console.log("Pipo " + pipo);
    }
}