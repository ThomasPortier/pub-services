var jsonPubsFile = require('../mocks/pubs');
var moment = require('moment');

function listerPubs() {
    for (i = 0; i < jsonPubsFile.length; i++) {
        console.log(jsonPubsFile[i].name)
    }
    return jsonPubsFile
}

function listerOpenPubs() {
    for (i = 0; i < jsonPubsFile.length; i++) {
        //console.log(jsonPubsFile[i].name)
    }
    return jsonPubsFile
}

module.exports = {
    listerPubs: listerPubs,
    listerOpenPubs: listerOpenPubs
};


console.log(moment().format('dddd'));

listerPubs();

console.log(typeof jsonPubsFile)

console.log(typeof listerPubs())