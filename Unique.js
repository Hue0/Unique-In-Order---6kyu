var uniqueInOrder=function(iterable){
  
 
  var arr = [];

  for(var i=0; i<iterable.length; i++){
  var current = iterable[i];
  var next = iterable[i+1];
  if(current !== next){ arr.push(current); }
  }  
  
 return arr;
}