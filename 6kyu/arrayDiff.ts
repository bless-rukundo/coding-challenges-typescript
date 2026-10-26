function arrayDiff(a: number[], b: number[]): number[] {
  let arrDiff: number;

  type mySet={
    [key: number] :number;
  }

  let seta = new Set<mySet>(a);
  let setb = new Set(b);
  //return [...seta];

  for(let i:number=0; i<seta.size; i++){
      for(let j=0; j<b.length; i++){
        if(seta[i] !== setb[j]){
          arrDiff.push(j);
        }
      }
  }



  return [];
}

console.log(arrayDiff([1,2,3,1,2,1,1,1], [2,6,5,4,4,4]));