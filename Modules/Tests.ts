var string = ["Hello", "928282", "101"];

var validators : {[s: string] : Validation.StringValidator;} = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

strings.forEach( s=> {
  for(var name in validators){
    console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
  }
});
