function positiveSum(arr:number[]):number {
  let sum:number = 0;
  if(arr.length>0){
  for(let i:number = 0; i<arr.length; i++){
    if(arr[i]>0){
      sum +=arr[i];
    }
  }
  return sum;
  }
  return 0;
}
console.log(positiveSum([1,2,3,4,5]))