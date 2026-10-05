 const digitalRoot = (n:number):number => {
    let sum:number =n;
  while(sum>9){
  let arr = sum.toString().split('').map(Number);
  sum=0;
  for(let i:number=0; i<arr.length; i++){
          sum += arr[i]; 
  }
}
  return sum;
}
console.log(digitalRoot(942));