class Kata {
  static getCount(str: string):number {
    let arr: string[] = str.split('');
    let count: number =0;
       for(let i:number=0; i<str.length; i++){
        if (str.charCodeAt(i) === 97 || str.charCodeAt(i) === 105 || str.charCodeAt(i) === 117 || str.charCodeAt(i) === 101 || str.charCodeAt(i) === 111) {
            count++
        }
       }
       return count;
  }
}
console.log(Kata.getCount("abracadabra"));
