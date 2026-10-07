function isSquare(n: number): boolean {
     let istrue: number  = Math.sqrt(n);
     if(istrue%1 ===0){
        return true;
     }else{
        return false; 
     }
};
console.log(isSquare(25))

