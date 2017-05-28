var assert = require('assert');
var IntlNameInitials = require('../src/index.js');

describe('isAlphabetic',function(){
    var intlNameInitials = new IntlNameInitials();
    it('isAlphabetic Name', function() {
        var name = {firstName: 'Juan', lastName: 'Perez'};
        assert.equal('JP', intlNameInitials.format(name));
    });
    it('is Hangul Name', function() {
        var name = {lastName: '홍', firstName: '길동'};
        assert.equal('홍', intlNameInitials.format(name));
    });
});

describe('Spanish characters',function() {
    var intlNameInitials = new IntlNameInitials();
    var CLDRCharacters = 'a á b c d e é f g h i í ï j k l m n ñ o ó p q r s t u ú ü v w x y ý z';
    var exemplarCharacters = CLDRCharacters.split(' ');
    var lastName = 'Miranda';
    var expectedOutput= ['am','ám','bm','cm','dm','em','ém','fm','gm','hm','im','ím','ïm','jm','km','lm','mm','nm','ñm','om','óm','pm','qm','rm','sm','tm','um','úm','üm','vm','wm','xm','ym','ým','zm'];
    it('testing exemplarCharacters ', function() {
        for( var i=0;i<exemplarCharacters.length;i++) {
            var name = {firstName: exemplarCharacters[i], lastName: lastName};
            assert.equal(expectedOutput[i].toUpperCase(), intlNameInitials.format(name));
        }
    });

});
