/**
 * this
 * 
 * Js는 Lexical Scope를 사용하기때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다. 
 * 
 * 
 * ***하지만 this 키워드는 바인딩이 객체가 생성되는 시점에
 * 결정된다. 
 */

const testFunction = function(){
   return this;
}
console.log(testFunction());

console.log(testFunction() ===global);

const mh = {
   name:'신명호',
   year:2001,
   sayHello:function(){
      return `안녕하세요 저는 ${this.name}입니다.`;
   },
}

console.log(mh.sayHello());

function Person(name,year){
   this.name = name;
   this.year = year;
   
   this.sayHello = function(){
      return `안녕하세요 저는 ${this.name}입니다.`;
   }
}
const mh2 = new Person('신명호',2001);
console.log(mh2.sayHello());

Person.prototype.dance = function(){
   function dance2(){
      return `${this.name}이 춤을 춥니다.`;
   }
   return dance2();
}
console.log(mh2.dance());

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면된다.
 * 
 * 1) 일반 함수 호출할땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 * 
 */

/**
 * 원하는 this 값으로 매핑하는법
 * 
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName(){
   return this.name;
}
console.log(returnName());

const mh3 = {
   name:'신명호',
}

console.log(returnName.call(mh3));
console.log(returnName.apply(mh3));

/**
 *  1) call -> 인자를 기반으로 파라미터를 순서대로 넘겨주고
 *  2) apply -> 인자를 리스트로 입력해야한다.
 */
function multiply(x,y,z){
   return `${this.name} / 결과값 : ${x*y*z}`;
}
console.log(multiply.call(mh3,3,4,5));
console.log(multiply.apply(mh3,[3,4,5]));

/**
 * bind()
 */
const lateFunc = multiply.bind(mh3,3,4,5);
console.log(lateFunc);
console.log(lateFunc());