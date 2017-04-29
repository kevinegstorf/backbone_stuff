let Calculator = function() {
  let add = function(a, b){
    if (!a || !b )
      throw new Error("The add method expects two arguments.");
    return a + b;
  }
  return {
    add: add
  }
} 