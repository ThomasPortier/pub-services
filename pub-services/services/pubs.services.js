var jsonPubsFile = require('../mocks/pubs');
var moment = require('../node_modules/moment/moment')

function listerPubs() {
    for (i = 0; i < jsonPubsFile.length; i++) {
        console.log(jsonPubsFile[i].name)
    }
    return jsonPubsFile

}

function listerPubsBySchedule(isOpenNow) {
    for (i = 0; i < jsonPubsFile.length; i++) {

        console.log(jsonPubsFile[i].name)
    }
    return jsonPubsFile
}

module.exports = {
    listerPubs: listerPubs,
    listerPubsBySchedule: listerPubsBySchedule
};

console.log(moment().format('dddd'));

listerPubs();


