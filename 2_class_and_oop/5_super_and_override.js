/**
 * Super and Override
 */
class YonginModel{
   name;
   year;

   constructor(name,year){
      this.name = name;
      this.year= year;
   }

   sayHello(){
      return `안녕하세요 ${this.name}입니다.`
   }
}

class MaleYonginModel extends YonginModel{
   //
   part;

   constructor(name,year,part){
      super(name,year);
      this.part=part;
   }

   sayHello(){
      //return `안녕하세요${this.name}입니다. 오늘은${this.part} 입니다`;
      return `${super.sayHello()} \n오늘은 ${this.part}입니다.`
   }

}

const mh = new MaleYonginModel('신명호',2003,'어깨');
console.log(mh.sayHello());

const uh = new MaleYonginModel('반유현',2001,'하체');
console.log(uh);
console.log(uh.sayHello());

/**
 * 클래스 함수 안에서 
 * super키워드로 변수를 불러오면 안된다.
 * 생성자에서만 사용 가능
 * 함수는 super 키워드로 사용이 가능하다.
 */