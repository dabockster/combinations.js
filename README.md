# combinations.js

Find the amount of possible combinations of n elements

## Background

Combinatrics is a part of discrete mathematics that specializes in finding all possible combinations of data within a set data structures (set, list, array, etc). This library takes the amount of elements, "n", along with the prefered number of elements chosen from the array, "k", and outputs the total number of possible combinations of _n_ involving _k_ elements.

Basically, it's doing this:

![](http://i.imgur.com/BTB1wG9.png)

with _k_ > _n_ and _k_ < _n_ returning 0.

## Usage

Installing

```sh
npm install --save combinations-js```

Importing

```js
var combinations = require('combinations-js');

var answer = combinations(n, k);
```