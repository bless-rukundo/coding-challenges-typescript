function wordCount(s:string): number {
    let count:number = 0;
    const excluded: string[] = ["a", "the", "on", "at", "of", "upon", "in", "as"];
    if(s.length>0){
    let result:string[] = s.replace(/[^a-zA-Z]/g, " ").split(' ');
    
    for(const word of result){
       if(word !==""){
         if(!excluded.includes(word.toLowerCase())){
        count+=1
       }
    }}
    return count;
    }
    return 0;
}
console.log(wordCount("abc123abc123abc"));