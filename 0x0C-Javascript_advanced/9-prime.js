function countPrimeNumbers() {
  var primes = [];
  for (var i = 2; i <= 100; i++) {
    var isPrime = true;
    for (var j = 0; j < primes.length; j++) {
      var p = primes[j];
      if (i % p === 0) {
        isPrime = false;
        break;
      }
      if (p * p > i)
        break;
    }
    if (isPrime)
      primes.push(i);
  }
  return(primes.length);
}
var t0 = performance.now();
countPrimeNumbers();
var t1 = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds.");
