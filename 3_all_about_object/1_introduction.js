/**
 * All about objects
 * 
 * 객체를 선언할때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화 해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

const mh = {
   name:'신명호',
   year:2001
};
console.log(mh);

class YonginMoel{
   name;
   year;
   constructor(name,year){
      this.name=name;
      this.year=year;
   }
}
const mh1 = new YonginMoel('신명호',2001);
console.log(mh1);

//생성자 함수
function YonginFunction(name,year){
   this.name=name;
   this.year=year;
}

const jh = new YonginFunction('김지향',1997);
console.log(jh);