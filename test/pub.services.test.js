var assert = require('chai').assert;
var expect = require('chai').expect;
var pubServices = require('../services/pubs.services');

describe('pubs.services', function () {
    describe('#listerPubs()', function () {
        it('should Succeed if returns an object', function () {
            expect(pubServices.listerPubs()).to.be.a('Array');
        });
    })
})
