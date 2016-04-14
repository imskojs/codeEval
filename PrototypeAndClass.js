//A 컨스트럭터를 만들고 testA라는 매서드를 만들어준다
function A() {}
A.prototype.testA = function() { console.log('testA'); };

//B 컨스트럭터 만들준비를 한다 constructor가 될 function임.
function B() {}

// B에 A에 있는 property들을 extend한다.
for (var property in A) {
  if (A.hasOwnProperty(property)) {
    B[property] = A[property];
  }
}
// extend한것을 반영하기 위해서 BConstructor를 만들고
function BConstructor() {
  this.constructor = B;
}
// 여기에 prototype도 extend하고
BConstructor.prototype = A.prototype;
// B prototype에 Bconstructor를 instantiate하면 A의 모든 프로토타입 메서드가 B의 프로타토입 메서드가 된다.
B.prototype = new BConstructor();
// 그후 B에서만 쓰는 프로토타입을 반영하면 B extends A가 완성되고 B constructor가 완성된다 new B()로 instantiate하여 사용한다
B.prototype.testB = function() { console.log('testB'); };
