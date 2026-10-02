const likes = (a : string[]) : string => {
  let arr = a.filter((name)=>name.length !==0)
  if(arr.length<1){
    return "no one likes this";
  }
  else if(arr.length === 2){
    return `${arr[0]} and ${arr[1]} like this`;
  }
  else if(arr.length ===3){
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  }else{
    return `${arr[0]}, ${arr[1]} and ${arr.length -2} others like this`;
  }
}
console.log(likes(["Alex", "", "", "Max"]));