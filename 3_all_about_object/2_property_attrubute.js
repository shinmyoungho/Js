/**
 * property attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적
 *    값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않았
 *    지만 다른 값을 가져오거나 설정할떄 호출되는 함수로 
 *    구성된 프로퍼티
 *    ex) getter setter
 * 
 */
const mh ={
   name:'신명호',
   year:2003,
};

console.log(Object.getOwnPropertyDescriptor(mh, 'name'));
console.log(Object.getOwnPropertyDescriptor(mh, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부, false로 
 *    설정하면 수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다.
 *    for...in 룹 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 
 *    가능한지 여부를 판단한다. false 일경우 프로퍼티
 *    삭제나 어트리뷰트 변경이 금지된다.
 *    단 writable이 true인 경우 값 변경과 writable을
 *    변경하는건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(mh, 'name'));

console.log(Object.getOwnPropertyDescriptors(mh));

const mh2={
   name:'신명호',
   year:2001,

   get age(){
      return new Date().getFullYear() - this.year+1;
   },

   set age(age){
      this.year = new Date().getFullYear()-age+1;
   }
}

console.log(Object.getOwnPropertyDescriptor(mh2,'age'));

 Object.defineProperty(mh2,'height',{
   value:174,
   writable:true,
   enumerable:true,
   configurable:true,
 });
 console.log(mh2);
 console.log(Object.getOwnPropertyDescriptor(mh2,'height'));


mh2.height = 180;
console.log(mh2.height);
Object.defineProperty(mh2,'height',{
   writable:false,
});
console.log(Object.getOwnPropertyDescriptors(mh2));
mh2.height=174;
console.log(mh2.height);
console.log('------');

/**
 * enumerable  열거가 가능 한가?
 */
console.log(Object.keys(mh2));

for(let k in mh2){
   console.log(k);
}
Object.defineProperty(mh2,'name',{
   enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(mh2,'name'));
console.log('-----------');
console.log(Object.keys(mh2));
for(let k in mh2){
   console.log(mh2[k]);
}
console.log('----------');

/**
 * 프로퍼티 삭제 불가능
 * configurable 재정의에 관한것
 * configurable이 false일 경우
 * writable 값이 true 이면 value값 바꾸기 가능
 * writable을 false로 바꾸기 가능
 * writable값이 false일 경우 다시 true로 바꾸기 불가능
 */
Object.defineProperty(mh2,'height',{
   writable:true,
   configurable:false,
});
console.log(Object.getOwnPropertyDescriptor(mh2,'height'));

Object.defineProperty(mh2,'height',{
   value:174,
});
Object.defineProperty(mh2,'height',{
   writable:false,
});
console.log(Object.getOwnPropertyDescriptor(mh2,'height'));
