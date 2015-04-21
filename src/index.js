var mathjs = require('mathjs');

var combinations = function(n, k){
	//check if k > n
	if (k > n){
		return 0;
	}
	//grab n! and k!
	var nFact = mathjs.factorial(n);
	var kFact = mathjs.factorial(k);

	//compute (n-k)! for later
	var nkFact = mathjs.factorial(n-k);

	//set numerator & denominator
	var numerator = nFact;
	var denominator = kFact * nkFact;

	var ans = numerator / denominator;
	return ans;
};

module.exports = combinations;