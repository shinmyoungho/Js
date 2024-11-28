/**
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++){
   console.log(i);
}

console.log('-------------');

for(let i = 10; i>0; i--){
   console.log(i);
}

console.log('-------------');

for(let i=0; i<3; i++){
   for(let j=3; j>0; j--){
      console.log(i,j);
   }
}
console.log('-------------');
// * 을 이용해서 6x6의 정사각형을 출력해라
for(let i=0; i<6; i++){
   let str='';
   for(let j=0; j<6; j++){
      str+='*';
   }
   console.log(str);
}

console.log('-------------');

/**
 * for ...in
 */

const mh={
   name:'신명호',
   year:2001,
   group:'한신',
}

for(let key in mh){
   console.log(mh[key]);
}
console.log('-------------');
const mharray=['명호','지향','유현','준혁'];

for(let index in mharray){
    console.log(`${+index+1}번 : ${mharray[index]}`)
}

/**
 * for ... in 반복문 
 * 객체를 사용할 경우 key 값을 반환하고
 * 배열을 사용할 경우 index를 반환한다.
 */

/**
 * for .. of 
 * 배열에서 값만 가져오고 싶은 경우 사용하는 문법이다.
 * 객체는 오류남.
 */

for(let value of mharray){
   console.log(value);
}
/**
 * 두개 다 for문으로 당연히 구현 가능하지만 
 * 편의성을 위해 만들어짐
 * for key in 객체,배열
 * 
 * for value of 배열
 */

/**
 * while
 */
let number =0;
while(number < 10){
   console.log(number)
   number++;
}
/**
 * 
 * do...while
 * 잘 안쓰긴 한다!
 */
number =0;
do{
   number ++;
}while(number < 10);
console.log(number);

/**
 * break;
 */
console.log('---------')
for(let i=0 ; i<10; i++){
   if(i===5) break;
   console.log(i);
}

number=0;
while(number <10){
   if(number ===5) break;
   number++;
   console.log(number);
}

/**
 * continue
 */
console.log('-----');
for(let i=0; i<10; i++){
   if(i===5) continue;

   console.log(i);
}

number =0;

console.log('--------');
while(number<10){
   number ++;
   if(number===5) continue;
   console.log(number);
}