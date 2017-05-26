# intl-name-initials


##format
```javascript

var intl-nameIntials = require('intl-name-initials');

var name = { firstName: 'Lucas', middlename: 'Christian', lastName: 'Welti'};

var nameIntials = intl-name-initials.format( name ); 
//output: LW
```

##hasInitials

```javascript
var intl-nameIntials = require('intl-name-initials');

var name = { firstName: 'Lucas', middlename: 'Christian', lastName: 'Welti'};

var nameIntials = intl-name-initials.hasInitials( name ); 
//output: true
```

