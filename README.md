# intl-name-initials

Provide the Name Initials based on the Script of the Language.

<img src="JPInitials.png">

<img src="Hangul.png" >

## format
```javascript

Example 1:

var intlNameInitials = require('intl-name-initials');
var initials = new intlNameInitials();

var name = { firstName: 'Juan', lastName: 'Perez'};

var nameIntials = initials.format( name );
//output: JP

Example 2: Bruce Lee

var initials = new intlNameInitials();
var name = { lastName: '李', firstName: '小龍'};

var nameIntials = initials.format( name );
//output: undefined 

Example 3: Hong Gildong

var initials = new intlNameInitials();
var name = {lastName: '홍', firstName: '길동'};

var nameIntials = initials.format( name );
//output: 홍

```


