/**
 * inheritance
 */

class YonginModel{
   name;
   year;

   constructor(name,year){
      this.name= name;
      this.year = year;
   }
}

class FemaleYonginModel extends YonginModel{
   diet(){
      return `다이어트를 합니다`;
   }
}

class MaleYonginModel extends YonginModel{
   health(){
      return '벌크업을 합니다.';
   }
}
const jh = new FemaleYonginModel('김지향',1997);
console.log(jh);

const mh = new MaleYonginModel('신명호',2001);
console.log(mh);
console.log(jh.diet());
console.log(jh.name);

console.log(mh.health());
console.log(mh.year);

const mh2 = new YonginModel('신명호',2001); 
console.log(mh2);

console.log(mh2.name);

console.log(mh instanceof YonginModel);
console.log(mh instanceof MaleYonginModel);
console.log(typeof mh);