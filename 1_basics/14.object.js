/**
 * object 객체
 */
//key :value
let mh = {
   name:'신명호',
   group:'용인',
   dance: ()=>{
      return '안녕';
   },
};

console.log(mh);
console.log(mh.name);
console.log(mh['name']);

const key = 'name';
console.log(mh[key]);

console.log(mh.dance());

const nameKey = 'name';
const nameValue = '신명호';

const groupKey = 'group';
const groupValue = '용인';

const mh2 = {
   [nameKey] :nameValue,
   [groupKey]: groupValue,
   dance : function(){
      return `${this.name}이 춤을 춥니다.`;
   }
};
console.log(mh2);
console.log(mh2.dance());

mh2.group = '용인시';
console.log(mh2);

mh2['englishName'] = 'sin myoung ho';
console.log(mh2);

delete mh2['englishName'];
console.log(mh2);

/**
 * 객체의 특징
 * 
 * 1)const로 선언할경우 객체 자체를 변경할수는 없다.
 * 2)객체 안의 프로퍼티나 메서드는 변경 가능
 */
const mh3={
   name:'신명호',
   group:'용인',
};
console.log(mh2);
//mh3={};

mh3['group'] = '용인시';
console.log(mh3);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(mh3));
/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(mh3));

const name = '신명호';
const mh4 = {
   name,
};
console.log(mh4);
