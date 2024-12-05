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
console.log(Object.__proto__);
console.log('------------');

console.log(Object.prototype.toString());