function solution(str: string): string {
  let arr = str.split('');
  return arr.reverse().join('');
}
console.log(solution('bless'));