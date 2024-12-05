/**
 * Immutable object
 */

const mh ={
   name:'신명호',
   year:2001,

   get age(){
      return new Date().getFullYear - this.year;
   },

   set age(age){
      this.year = new Date().getFullYear - age;
   }
}

console.log(mh);

/**
 * Extensible 확장의 여부  - 
 *  기본적으로 true임.
 *   false일 경우 확장은 불가능하지만 
 *   삭제는 가능하다.
 * 특징   에러가 발생하지 않는다
 */

console.log(Object.isExtensible(mh));

mh['liveIn'] = 'yongin';

console.log(mh);

Object.preventExtensions(mh);
console.log(Object.isExtensible(mh));

mh['qwr'] = 'ㅂㅂㅂ';
console.log(mh);

delete mh['liveIn'];
console.log(mh);

/**
 * Seal
 * 
 * 프로퍼티에서 configurable 속성을 false로 만듬과
 * 동시에 값을 추가 하거나 삭제하지 못한다.
 * 
 */
const mh2 ={
   name:'신명호',
   year:2001,

   get age(){
      return new Date().getFullYear - this.year;
   },

   set age(age){
      this.year = new Date().getFullYear - age;
   }
}
console.log('``````````````');
console.log(mh2);

console.log(Object.isSealed(mh2));

Object.seal(mh2);

console.log(Object.isSealed(mh2));
console.log('123412421421');
mh2['name']='반유현';
console.log(mh2);

delete mh2['name'];
console.log(mh2);

mh2['qwr']='qwer';
console.log(mh2);

console.log(Object.getOwnPropertyDescriptor(mh2,'name'));

const mh3 ={
   name:'신명호',
   year:2001,

   get age(){
      return new Date().getFullYear - this.year;
   },

   set age(age){
      this.year = new Date().getFullYear - age;
   }
}
console.log('----------[');
Object.defineProperty(mh3,'name',{
   configurable:false,
});
mh3['qwe']='qwer';
console.log(mh3);

delete mh3['name'];
console.log(mh3);

/**
 * Freezed
 */
const mh4 ={
   name:'신명호',
   year:2001,

   get age(){
      return new Date().getFullYear - this.year;
   },

   set age(age){
      this.year = new Date().getFullYear - age;
   }
}

console.log(Object.isFrozen(mh4));
Object.freeze(mh4);
console.log(Object.isFrozen(mh4));

mh4['qwe']='qwe';
console.log(mh4);
delete mh4.name;
console.log(mh4)

// Object.defineProperty(mh4,'name',{
//    value:'반유현',
// })
console.log(Object.getOwnPropertyDescriptor(mh4,'name'));

const mh0={
   name:'신명호',
   year:2001,
   jh:{
      name:'김지향',
      year:1997,
   },
};
Object.freeze(mh0);
console.log(Object.isFrozen(mh0.jh));