var combinations = require('../');
var assert = require('assert');

describe('combinations', function(){
	it('should return 0 when k > n', function(){
		assert.equals(0, combinations(2, 4));
		assert.equals(0, combinations(2, 5));
		assert.equals(0, combinations(5, 7));
		assert.equals(0, combinations(6, 8));
	});

	it('should return the number of possible combinations', function(){
		assert.equals(24, combinations(4, 2));
		assert.equals(10, combinations(5, 2));
		assert.equals(40, combinations(5, 3));
		assert.equals(15, combinations(6, 4));
	});
});