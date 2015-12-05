interface SearchFunc{
  (source: string, subString: string) : boolean;
}

var mySearch : SearchFunc;
mySearch = function(src: string, subString: string){
  var result = src.search(subString);
  if(result == -1){
    return false;
  }
  else {
    return true;
  }
}
