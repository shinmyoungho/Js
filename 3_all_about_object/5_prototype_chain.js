const testObj={};

// __proto_모든 객체에 존재하는 프로퍼티이다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.

console.log(testObj.__proto__);

function YonginModel(name,year){
   this.name=name;
   this.year=year;
}

console.log(YonginModel.prototype);

// console.dir(YonginModel.prototype,{
//    showHidden:true,
// });

//circular reference
console.log(YonginModel.prototype.constructor === YonginModel);
console.log(YonginModel.prototype.constructor.prototype === YonginModel.prototype);

const mh = new YonginModel('신명호',2001);

console.log(mh.__proto__);
console.log(mh.__proto__ === YonginModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(YonginModel.__proto__===Function.prototype);
console.log(Function.prototype.__proto__===Object.prototype);
console.log(YonginModel.prototype.__proto__===Object.prototype);
console.log('------------');

console.log(Object.prototype.toString());

function YonginModel2(name,year){
   this.name = name;
   this.year = year;

   this.sayHello = function(){
      return `${this.name}이 인사를 합니다.`;
   }
}
const mh2 = new YonginModel2('신명호',2001);
const jh2 = new YonginModel2('김지향',1997);

console.log(mh2.sayHello());
console.log(jh2.sayHello());

console.log(mh2.sayHello === jh2.sayHello);

console.log(mh2.hasOwnProperty('sayHello')); //상속 x 고유 속성

// 만들어진 클래스는 ~.prototype을 가르킨다.
function Mh3(name,year){
   this.name =name;
   this.year = year;

}

Mh3.prototype.sayHello = function(){
   return `${this.name}가 인사를 합니다.`;
}

const mh3 = new Mh3('신명호',2001);
const jh3 = new Mh3('김지향',1997);

console.log(mh3.sayHello());
console.log(jh3.sayHello());

console.log(mh3.hasOwnProperty('sayHello')); //상속 o 고유속성x
console.log(mh3.sayHello === jh3.sayHello);

Mh3.sayStaticHello = function(){
   return `스태틱 함수 실행`;
}
console.log(Mh3.sayStaticHello());

/**
 * Overriding
 */

function YonginModel4(name,year){
   this.name = name;
   this.year = year;

   this.sayHello = function(){
      return '안녕하세요 저는 인스턴스 메서드입니다.'
   }
}

YonginModel4.prototype.sayHello=function(){
   return '안녕하세요 저는 prototype 메서드입니다.';
}

const mh4 = new YonginModel4('신명호',2001);

// 프로퍼티 셰도잉 - class에서 override
console.log(mh4.sayHello());

/**
 * getPrototypeof , setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 protytype 변경
 * 
 */
function Mh5(name,year){
   this.name=name;
   this.year=year;
}

Mh5.prototype.sayHello = function(){
   return `${this.name}가 인사를 합니다.`;
}

function FemaleMh5(name,year){
   this.name=name;
   this.year=year;

   this.dance = function(){
      return`${this.name}이 춤을 춥니다.`;
   }
}
console.log('-------------');
const mh5 = new Mh5('신명호',2001);
const jh5 = new FemaleMh5('김지향',1997);

console.log(mh5.__proto__);
console.log(mh5.__proto__ === Mh5.prototype);
console.log(Object.getPrototypeOf(mh5) === Mh5.prototype);


console.log(mh5.sayHello());
console.log(jh5.dance());
console.log(Object.getPrototypeOf(jh5) === FemaleMh5.prototype);

Object.setPrototypeOf(jh5, Mh5.prototype); //프로토타입을 바꾼다.
console.log(jh5.sayHello());

console.log(jh5.constructor === Mh5);
console.log(jh5.dance());
console.log(Object.getPrototypeOf(jh5) === Mh5.prototype);

FemaleMh5.prototype = Mh5.prototype;

const qw = new FemaleMh5('qwer',1111);
console.log(Object.getPrototypeOf(qw)=== FemaleMh5.prototype);
console.log(FemaleMh5.prototype === Mh5.prototype);