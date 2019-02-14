/**
 * @name isPrime
 * @param { number } n
 * @param { number } p
 * @param { number } i
*/

export function isPrime(n: number, p = 2, i = 2): boolean {
  if (i <= n - 2) {
    return isPrime(n, p * (i + 1), i + 1 );
  }
  return p % n !== 0;
}
