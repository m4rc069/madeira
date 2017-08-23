
var should = require('chai').should(),
    madeira = require('../index'),
    log = madeira.log,
    warn = madeira.warn,
    error = madeira.error;
describe('#log', function() {
    it('log message', function() {
        log('message').should.equal(true);
    }); });
describe('#warn', function() {
    it('warn message', function() {
        warn('message').should.equal(true);
    }); });
describe('#error', function() {
    it('error message', function() {
        error('message').should.equal(true);
    }); });