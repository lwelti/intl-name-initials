# intl-name-initials


## format
```javascript

var intl-name = require('intl-name-initials');

var name = { firstName: 'Lucas', middlename: 'Christian', lastName: 'Welti'};

var nameIntials = intl-name.format( name ); 
//output: LW
```

## hasInitials

```javascript
var intl-name = require('intl-name-initials');

var name = { firstName: 'Lucas', middlename: 'Christian', lastName: 'Welti'};

var nameIntials = intl-name.hasInitials( name ); 
//output: true
```

