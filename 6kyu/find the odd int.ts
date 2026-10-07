  const findOdd = (xs: number[]): number => {
    if(xs.length!==0){
    let count:any = xs.reduce((acc: any, current:number)=>{
      acc[current] = (acc[current] || 0)+1;
      return acc
    }, {});
  
    for(let [key, value] of Object.entries(count)){
      if(value %2 !==0){
        return key;
      }
    }  
    }
    return 0;
  };

  console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
