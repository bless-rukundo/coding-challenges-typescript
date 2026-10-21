function findUniq(arr:number[]) {
   interface indexSignature{
      [key: number]: number;
   }

    let count = arr.reduce((acc:indexSignature, current:number)=>{
        acc[current] = (acc[current] || 0)+1;
        return acc;
    }, {})
     let unique;
    for(let [key, value] of Object.entries(count)){
        if(value ===1){
            unique = key;
        }
    }
    return Number(unique);
}

console.log(findUniq([1,2,3,3,3,1,4,2]))