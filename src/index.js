var factorial = function(n){
	if (n < 0){
		return undefined;
	}
	else if (n == 0){
		return 1;
	}
	else{
		return n * factorial(n - 1);
	}
};

var combinations = function(n, k){
	//check if k > n
	if (k > n){
		return 0;
	}
	//grab n! and k!
	var nFact = factorial(n);
	var kFact = factorial(k);

	//compute (n-k)! for later
	var nkFact = factorial(n-k);

	//set numerator & denominator
	var numerator = nFact;
	var denominator = kFact * nkFact;

	var ans = numerator / denominator;
	return ans;
};

module.exports = combinations;