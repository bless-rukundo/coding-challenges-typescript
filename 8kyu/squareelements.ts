
function squareSum(numbers: number[]): number {
    return numbers.map((item)=>item**2).reduce((acc, current)=>{
      acc = acc+current
      return acc;
    },0);
}
console.log(squareSum([1,2]));