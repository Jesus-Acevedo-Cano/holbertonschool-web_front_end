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
setTimeout(function(){for (let index = 0; index < 100; index++) {
  countPrimeNumbers();
}}, 0);
var t1 = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (t1 - t0) + " milliseconds.");
