const distinct = (a: number[]): number[] => {
  let mySet = [... new Set<number>(a)];
  return mySet;
}
console.log(distinct([1,2,2,2]))