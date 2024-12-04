/**
 * Static Keyword
 */

// class YonginModel{
//    name;
//    year;
//    static groupName = '용인시';

//    constructor(name,year){
//       this.name=name;
//       this.year =year;
//    }

//    static returnGroupName(){
//       return '용인시';
//    }
// }

// const mh = new YonginModel('신명호',2001);
// console.log(mh);
// console.log(YonginModel.groupName);
// console.log(YonginModel.returnGroupName());

/**
 * factory constructor
 */
class YonginModel{
   name;
   year;

   constructor(name,year){
      this.name = name;
      this.year = year;
   }
   
   static fromObject(ob){
      return new YonginModel(ob.name,ob.year);
   }
   static fromList(arr){
      return new YonginModel(arr[0],arr[1]);
   }
}
const mh= YonginModel.fromObject({
   name:'신명호',
   year:2001,
});
console.log(mh);
const jh = YonginModel.fromList([
   '김지향',1997
]);
console.log(jh);