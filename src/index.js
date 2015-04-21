var mathjs = require('mathjs');

var combinations = function(n, k){
	//check if k > n
	if (k > n){
		return undefined;
	}
	//grab n! and k!
	var nFact = mathjs.factorial(n);
	var kFact = mathjs.factorial(k);

	//set numerator & denominator
	var numerator = nFact;
	var denominator = kFact * (nFact - kFact);

	return numerator / denominator;
};

module.exports = combinations;