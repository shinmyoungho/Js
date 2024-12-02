/**
 * Class Keyword
 */
class YonginModel{
   name; 
   year;

   constructor(name, year){
      this.name = name;
      this.year = year;
   }
   sayName(){
      return `안녕하세요 저는 ${this.name}입니다.`;
   }
}
// constructor - 생성자

const mh = new YonginModel('신명호',2001);
console.log(mh);
const jh = new YonginModel('김지향',1997);
console.log(jh);
const yh = new YonginModel('반유현',2001);
console.log(yh);

console.log(mh.name);

console.log(mh.sayName());
console.log(jh.sayName());
console.log(yh.sayName());

console.log(typeof YonginModel);
//class는 함수로 인식이 된다.
console.log(typeof mh);
//class로 생성한 인스턴스는 객체다.


