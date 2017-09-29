var jsonPubsFile = require('../mocks/pubs.json');
var moment = require('moment');

function listerPubs() {
    return jsonPubsFile
}

function listerPubsOpenNow() {
    var today = (moment().format('dddd'));
    var hourNow = (moment().format('hhmm'));
    var openPubs = [];
    //console.log(today, hourNow)
     for (i = 0; i < jsonPubsFile.length; i++) {
        var indexTabOpenDays = jsonPubsFile[i].openDays
        //console.log(indexTabOpenDays)
        if (indexTabOpenDays.includes(today)) {
            //console.log(today + ' présent')
            openPubs.push(jsonPubsFile[i].name);
        }
    } 
    console.log(openPubs)
    return openPubs
}






module.exports = {
    listerPubs: listerPubs,
    listerPubsOpenNow: listerPubsOpenNow
};


listerPubs();
listerPubsOpenNow();

console.log(typeof jsonPubsFile)

