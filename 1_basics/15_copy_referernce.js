/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

let original ='안녕하세요';
let clone = original;

console.log(original);
console.log(clone);
clone += ' 신명호입니다.';

console.log('---------------');
console.log(original);
console.log(clone);

let originalObj={
   name:'신명호',
   group:'용인',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);


console.log('-----------');
originalObj['group'] ='용인시';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);


originalObj ={
   name:'신명호',
   group:'용인시',
};

cloneObj ={
   name:'신명호',
   group:'용인시',
};
console.log('-----------');
console.log(originalObj===cloneObj);
clone = '안녕하세요';
console.log(original === clone);

console.log('-----------');

const mh1 ={
   name:'신명호',
   group:'용인',
};

const mh2 = mh1;
const mh3 ={
   name:'신명호',
   group:'용인',
}
console.log(mh1 === mh2); // true
console.log(mh1 === mh3);// false
console.log(mh2===mh3);//false

/**
 * Spread Operator
 */

const mh4={
   ...mh3,
};
console.log(mh4);

console.log(mh4 ===mh3);

const mh5 = {
   year:2001,
   ...mh3,
};
console.log(mh5);

const mh6={
   name:'김지향',
};
console.log(mh6);

// const numbers = [1,3,5];
// const numbers2 = [
   
//    ...numbers,
//    10,
// ];
// console.log(numbers2);
