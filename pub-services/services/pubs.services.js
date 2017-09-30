const jsonPubsFile = require('../mocks/pubs.json');
const moment = require('moment');
const owner = require('../Models/OwnerClass');
const beer = require('../Models/BeerClass');
const openHours = require('../Models/OpenHoursClass');
const pub = require('../Models/PubClass');



function dataFromClass(){
    const pubs = jsonPubsFile.map( function(indexPub){
        const unOwner = new owner(indexPub.owner.firstName, indexPub.owner.lastName, indexPub.owner.mail)
        const unOpenHours = new openHours(indexPub.openHours.start, indexPub.openHours.end)
        const beersList = indexPub.beers.map( function(indexBeer){
            return new beer(indexBeer.type, indexBeer.name)         
        })
        return  new pub(indexPub.name, unOwner, indexPub.openDays, unOpenHours, beersList)
    }) 
    return pubs;
}



function listerPubs() {
    return dataFromClass()
}

function listerPubsOpenNow() {
    let today = (moment().format('dddd'));
    //console.log(jsonPubsFile.filter(pub => pub.openDays.includes(today)).map(pub => pub.name))
    return dataFromClass().filter(pub => pub.openDays.includes(today))
}

module.exports = {
    listerPubs: listerPubs,
    listerPubsOpenNow: listerPubsOpenNow
};

