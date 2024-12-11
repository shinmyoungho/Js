/**
 * Async theory
 */

// function longWork(){
//    const now =new Date();

//    /**
//     * milloseconds since epoch
//     * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//     * 밀리초로 반환한다.
//     */
//    const milloseconds = now.getTime();
//    const afterTowSeconds = milloseconds +2 * 1000;

//    while(new Date().getTime() < afterTowSeconds){

//    }
//    console.log(now);
// }
// console.log('Hello');
// longWork();
// console.log('World');

function longWork(){
   setTimeout((function(){
      console.log('완료');
   }),2000);
}
console.log('Hello');
longWork();
console.log('world');