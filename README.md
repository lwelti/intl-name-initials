# intl-name-initials

Provide the Name Initials based on the Script of the Language.

<img src="JPInitials.png">

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

```


