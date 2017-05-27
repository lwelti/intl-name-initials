'use strict';

var intlNameInitials = require('../src/index.js');

var name = {firstName: 'Juan', lastName: 'Perez'};

var initials = new intlNameInitials();


console.log(initials.format(name));

var cnName = {lastName: '李', firstName: '小龍'};
console.log(initials.format(cnName));
