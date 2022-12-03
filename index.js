function receivesAFunction(thing){
    return thing();

}

receivesAFunction(function(){
    
});






function returnsANamedFunction() {
  return returnsANamedFunction;
}

function returnsAnAnonymousFunction(){
  return  function () {
      }
      
}



// let returnsAnAnonymousFunction = () =>  returnsAnAnonymousFunction;


