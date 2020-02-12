

var a=function (arr) {
return `there are ${arr.length} items those are `
}

var adder=function(a,b) {
  return `the sum of the two num is ${a+b}`;
}

var pi=3.14;
module.exports.a=a;
module.exports.adder=adder;
module.exports.pi = pi;
//or we can do as below
/*module.exports={
  a:a,
  adder:adder,
  pi:pi
}
*/
