function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
    if (typeof(iterable) === 'string'){
        iterable = iterable.split('');
    }
	let arr: (number | string)[] =[];
    for(let i=0; i<iterable.length; i++){
       
       if(iterable[i] != iterable[i+1]){
           arr.push(iterable[i]!);
       }
    }
    return arr;
};

console.log(uniqueInOrder(['A','A','A','A','B','B','B','C','C','D','A','d','D']))