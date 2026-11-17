function findOutlier(integers: number[]): number {
    let countEO:number[] = [];
   for(let i=0; i<integers.length; i++){
     if(i%2 === 0){
        countEO.push(i);
     }
   }
 let outLier: number[] =[];
   if(countEO.length > 1){
     outLier = integers.filter((item)=>item%2 !==0)
   }
   let isoutLier:number;
   isoutLier = outLier[0] as number;
   return isoutLier;
}


console.log(findOutlier([12,23,2,2,4,6]))