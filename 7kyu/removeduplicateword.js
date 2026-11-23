function removeDuplicateWords (s) {
  const arr = s.split(' ')
  const mySet = [... new Set(arr)];
  return mySet.join(" ");
}
console.log(removeDuplicateWords("Bless Bless Rukundo Dushimimana El"))