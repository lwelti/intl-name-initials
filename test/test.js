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

describe('Numerical Characters',function() {
    var intlNameInitials = new IntlNameInitials();
    var CLDRCharacters = '1a 2b 3c 4d 1 2 3 4 5 6 7 8 9 0 $ % ^ & * !';
    var exemplarCharacters = CLDRCharacters.split(' ');
    var lastName = 'Miranda';
    it('testing exemplarCharacters ', function() {
        for( var i=0;i<exemplarCharacters.length;i++) {
            var name = {firstName: exemplarCharacters[i], lastName: lastName};
            assert.equal('M', intlNameInitials.format(name));
        }
    });

});

describe('Greek Characters',function() {
    var intlNameInitials = new IntlNameInitials();
    var CLDRCharacters = 'α ά β γ δ ε έ ζ η ή θ ι ϊ κ λ μ ν ξ ο ό π ρ σ ς τ υ ύ ϋ ΰ φ χ ψ ω ώ';
    var exemplarCharacters = CLDRCharacters.split(' ');
    var lastName = 'Miranda';
    it('testing exemplarCharacters ', function() {
        for( var i=0;i<exemplarCharacters.length;i++) {
            var name = {firstName: exemplarCharacters[i], lastName: lastName};
            assert.equal(exemplarCharacters[i].toUpperCase() + 'M', intlNameInitials.format(name));
        }
    });

});

describe('Cyrillic Characters',function() {
    var intlNameInitials = new IntlNameInitials();
    var CLDRCharacters = 'а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я';
    var exemplarCharacters = CLDRCharacters.split(' ');
    var lastName = 'Miranda';
    it('testing exemplarCharacters ', function() {
        for( var i=0;i<exemplarCharacters.length;i++) {
            var name = {firstName: exemplarCharacters[i], lastName: lastName};
            assert.equal(exemplarCharacters[i].toUpperCase() + 'M', intlNameInitials.format(name));
        }
    });

});