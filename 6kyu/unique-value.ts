function findUniq(arr: number[]): number {
   let count = arr.reduce<Record<number, number>>((acc, current)=>{
    acc[current] = (acc[current] || 0)+1;
    return acc;
   },{});

  let unique: string | undefined;
  for(let [key, value] of Object.entries(count)){
    if (value ===1 ){
        unique = key;
    }
  }
  
  return Number(unique);
}
console.log(findUniq([1,2,3,4,5,6,6,71,1,2,3,1,1]))