var servicePub = require('pub-services');

function getListPub(){
    servicePub.services.pubService.listerPubs();
    servicePub.services.pubService.listerPubsOpenNow();
}

module.exports = {
    getListPub : getListPub
};

