function filter_list(l:Array<any>):Array<number> {
  return l.filter((item) => typeof item === 'number');
}
console.log(filter_list([12,32,4,'bl', '32', 421]));