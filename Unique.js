
/*Implement the function unique_in_order which takes as argument a sequence and returns a list of
items without any elements with the same value next to each other and preserving the original 
order of elements.*/


var uniqueInOrder=function(iterable){
  
 
  var arr = [];

  for(var i=0; i<iterable.length; i++){
  var current = iterable[i];
  var next = iterable[i+1];
  if(current !== next){ arr.push(current); }
  }  
  
 return arr;
}