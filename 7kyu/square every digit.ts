class Kata {
  static squareDigits(num: number): number {
    let arr:string[] = num.toString().split('');
    let newArray:number[] = arr.map((itemm)=>{
        const item = Number(itemm);
        return item*item;
    }
    )
    return Number(newArray.join(''));
  }
}
console.log(Kata.squareDigits(9119));