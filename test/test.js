var assert = require('assert');
var intlNameInitials = require('../src/index.js');

describe('isAlphabetic',function(){
    var initials = new intlNameInitials();

    it('isAlphabetic Name', function() {
        var name = {firstName: 'Juan', lastName: 'Perez'};
        assert.equal('JP', initials.format(name));
    });
    it('is Hangul Name', function() {
        var name = {lastName: '홍', firstName: '길동'};
        assert.equal('홍', initials.format(name));
    });
});