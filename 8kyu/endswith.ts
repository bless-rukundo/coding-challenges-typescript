function solution(str: string, ending: string): boolean {
  if(!str.endsWith(ending)){
     return false;
  }else{
    return true;
  }
}
console.log(solution("Bless", "sse"));