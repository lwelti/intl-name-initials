# intl-name-initials

Provide the Name Initials based on the Script of the Language.


## format
```javascript

Example 1:

var intl-name = require('intl-name-initials');

var name = { firstName: 'Lucas', middlename: 'Christian', lastName: 'Welti'};

var nameIntials = intl-name.format( name ); 
//output: LW

Example 2: Bruce Lee

var name = { firstName: '李', lastName: '小龍'};

var nameIntials = intl-name.format( name ); 
//output: undefined 

```

## hasInitials

```javascript
var intl-name = require('intl-name-initials');

var name = { firstName: 'Lucas', middlename: 'Christian', lastName: 'Welti'};

var nameIntials = intl-name.hasInitials( name ); 
//output: true

var name = { firstName: '李', lastName: '小龍'};

var nameIntials = intl-name.hasInitials( name ); 
//output: false
```

