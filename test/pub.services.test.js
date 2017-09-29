var assert = require('chai').assert;
var expect = require('chai').expect;
var pubServices = require('../services/pubs.services');
var jsonPubsFile = require('../mocks/pubs');

describe('pubs.services', function () {
    describe('#listerPubs()', function () {
        it('should Succeed if listerPubs() returns an Array', function () {
            expect(pubServices.listerPubs())
                .to.be.an('array');
        });
    })
    
    describe('#listerPubsOpenNow()', function () {
        it('should Succeed if listerPubs() returns an Array', function () {
            expect(pubServices.listerPubsOpenNow()).to.be.a('array');
        });
        it('should Succeed if today is Friday', function () {
            assert(pubServices.listerPubsOpenNow().length = 3);
        });
    })

})
