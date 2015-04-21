# combinations.js

Find the amount of possible combinations of n elements

## Background

Combinatorics is a part of discrete mathematics that specializes in finding all possible combinations of data within a set data structures (set, list, array, etc). This library takes the amount of elements, "n", along with the prefered number of elements chosen from the array, "k", and outputs the total number of possible combinations of _n_ involving _k_ elements.

Basically, it's doing this:

![](http://i.imgur.com/BTB1wG9.png)

as long as _k_ > _n_, while _k_ < _n_ returns 0.

We call this _n choose k_.

Example
--------
We are given the set of {1, 2, 3, 4, 5}. We want to know how many unique sets there are containing three elements. Therefore, we use the combination formula to find out.

In other words, we are finding _5 choose 3_.

![](http://i.imgur.com/8ku3UHj.png)

({∅}, {1,1,1}, {1,1,2}, {1,1,3}, {1,1,4}, {1,1,5}, {1,2,1}, {1,2,2}, ..., {5,5,5})

The answer is __10 combinations__.

## Usage

Installing

```sh
npm install --save combinations-js
```

Importing

```js
var combinations = require('combinations-js');

var answer = combinations(n, k);
```