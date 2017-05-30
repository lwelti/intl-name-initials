# intl-name-initials

## Introduction
Provide the Name Initials if this is supported by the Language (Script) of the name.

This is handy if you need to build an interface where you don't have the Profile Image and can display the Initials of the user:


<img src="JPInitials.png">

<img src="Hangul.png" >


## Installation

    npm install --save intl-name-initials

## Usage

```js
var IntlNameInitials = require('intl-name-initials');

var name = { firstName: 'Juan', lastName: 'Perez'};

var intlNameInitials = new IntlNameInitials();
var nameIntials = intlNameInitials.format( name );
console.log(nameInitials);
// > JP

```

## API

### `format(name{, options})`

The function returns a **string** containing the Initials, if the Language of the Name does **not** supports Initials then it returns **undefined**

## name

Name **object**, the structure expected is:
```js
{
 firstName: string,
 lastName: string
 }
```


## options

At this moment no options are supported.


## Examples

### Example 1
```javascript

Example 1: Juan Pérez

var IntlNameInitials = require('intl-name-initials');

var name = { firstName: 'Juan', lastName: 'Pérez'};

var intlNameInitials = new IntlNameInitials();
var nameIntials = intlNameInitials.format( name );
//output: JP
```

### Example 2

```js
var IntlNameInitials = require('intl-name-initials');

var name = {lastName: '홍', firstName: '길동'};
var intlNameInitials = new IntlNameInitials();

var nameIntials = intlNameInitials.format( name );
//output: 홍

```

### Example 3
Initials **not** supported.

```js
var IntlNameInitials = require('intl-name-initials');

var name = { lastName: '李', firstName: '小龍'};

var intlNameInitials = new IntlNameInitials();
var nameIntials = intlNameInitials.format( name );
//output: undefined

```


## Language Scripts

At this moment only specific Range of Unicode Characters are supported:
* [Basic Latin](https://unicode-table.com/en/blocks/basic-latin/)
* [Latin-1 Supplement](https://unicode-table.com/en/blocks/latin-1-supplement/)
* [Latin Extended-A](https://unicode-table.com/en/blocks/latin-extended-a/)
* [Latin Extended-B](https://unicode-table.com/en/blocks/latin-extended-b/)
* [Greek](https://unicode-table.com/en/blocks/greek-coptic/)
* [Cyrillic](https://unicode-table.com/en/blocks/cyrillic/)
* [Hangul](http://www.programminginkorean.com/programming/hangul-in-unicode/hangul-syllables-uac00-ud7a3/)


## License
MIT © Lucas Welti