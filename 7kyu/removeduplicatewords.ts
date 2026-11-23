function removeDuplicateWords(s: string): string {
  const arr:string[] = s.split(' ')
  const set = [... new Set(arr)]
  return set.join(' '); 
}

console.log(removeDuplicateWords('cat cat dog goat goat'));