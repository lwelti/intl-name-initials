'use strict';

var intlNameInitials = function () {
};
var pattern = '{0}{1}';

function _firstLetter(text) {
    return text.charAt(0);
}

function _upperCase(letter) {

}

function _isBasicLatin(l) {
    if (l > 64 && l < 90) {
        return true;
    }
    return false;
}

function _isLatin1Supplement(l) {
    if (l > 191 && l < 224) {
        return true;
    }
    return false;

}

function _isLatinExtendedA(l) {

    if (l > 255 && l < 384) {
        return true;
    }
    return false;

}

function _isLatinExtendedA(l) {

    if ((l > 179 && l < 448 ) || ( l > 451 && l < 592)) {
        return true;
    }
    return false;

}

function _isCyrilic(l){

    if ((l > 1023) && (l < 1328)){
        return true;

    }
    return false;
}

function _isGreek(l){

    if ((l > 912) && (l < 1024)){
        return true;

    }
    return false;
}

function _isHangul(l){

    if ((l > 44032) && (l < 55203)) {
        return true;
    }
    return false;

}

function _initials(letter) {
    var l = letter.charCodeAt(0);
    if ((_isBasicLatin(l)) || ( _isLatin1Supplement(l)) || ( _isLatinExtendedA(l)) || (_isLatinExtendedA(l))) {
        return letter;
    }
    return '';
}

function _isSupportedInitials(letter) {
    var l = letter.charCodeAt(0);
    if ((_isBasicLatin(l)) || ( _isLatin1Supplement(l)) || ( _isLatinExtendedA(l)) || (_isLatinExtendedA(l))) {
        return true;
    }
    return false;
}

function _formatLatinInitials(a, b) {

    var initials = pattern.replace('{0}', _initials(a));
    initials = initials.replace('{1}', _initials(b));
    return initials.toUpperCase();
}

function isCJK(a){

    // HANGUL SYLLABLES
    // We want to be sure the full name is Hangul
    if (a.length < 3){
        var i = 0;
        for(var c=0;c< a.length;c++){
            if (_isHangul(a.charCodeAt(c)) )
            {
                i++;
            }
        }
        if (i === a.length){
            return true;
        }
    }
    return false;
}

intlNameInitials.prototype.format = function (name, options) {

    var initials = undefined,
        a = '',
        b = '';

    if (name.hasOwnProperty("firstName")) {
        a = _firstLetter(name.firstName);
    }
    if (name.hasOwnProperty("lastName")) {
        b = _firstLetter(name.lastName);
    }
    if (_isSupportedInitials(a) || _isSupportedInitials(b)) {
        initials = _formatLatinInitials(a, b);
    }

    // for CJK
    if (name.hasOwnProperty("lastName")){
            if (isCJK(name.lastName)){
                initials = name.lastName;
            }
    }

    return initials;

};

module.exports = new intlNameInitials();
