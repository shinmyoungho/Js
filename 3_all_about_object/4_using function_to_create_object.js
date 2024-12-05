/**
 * Using function to create object
 */
// new 키워드를 쓸때 this 키워드가 global에 매핑이된다..
function YonginModel(name,year){
   if(!new.target){
      return new YonginModel(name,year);
   }
   this.name=name;
   this.year=year;

   this.dance = function(){
      return `${this.name}이 춤을 춥니다.`
   }
}

const mh = new YonginModel('신명호',2001);
console.log(mh);
// console.log(mh.dance());
const mh2 = YonginModel('반유현',2001);
console.log(mh2); 


// 에로우 함수는 생성자함수를 쓸 수 없다.
// const yonginModelArrow=()=>{
//    this.name=name;
//    this.year=year;
// }


