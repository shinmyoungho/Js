/**
 * Getter and Setter
 */

class YonginModel{
   name;
   year;

   constructor(name,year){
      this.name = name;
      this.year = year;
   }

   /**
    * getter의 역할
    * 1)데이터를 가공해서 새로운 데이터를 반환할때
    * 2)private한 값을 반환할때
    */
   get nameAndYear(){
      return `${this.name}-${this.year}`;
   }

   set name(name){
      this.name = name;
   }
}
const mh =  new YonginModel('신명호',2001);
console.log(mh);
console.log(typeof mh.nameAndYear);

mh.name = '김지향';
console.log(mh);

class YonginModel2{
   #name;  //ES7
   year;

   constructor(name,year){
      this.#name = name;
      this.year = year;
   }
   get name(){
      return this.#name;
   }

   set name(name){
      this.#name = name;
   }
}

const mh2 = new YonginModel2('신명호',2001);
console.log(mh2);
console.log(mh2.name);

mh2.name = '김지향';
console.log(mh2.name);;