console.log(global === this);

console.log(module === this);

console.log(module.exports === this);

// ou module.exports.digaOi
this.digaOi = function(){
  console.log('Oi!!!');
}
