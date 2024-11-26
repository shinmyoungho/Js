/**
 * If and Switch
 */

let number =5;

if (number %2 ===0){
   console.log('number 변수는 짝수입니다.');
}else{
   console.log('number 변수는 홀수 입니다.');
}

if(number %2 ===0){
   console.log('2의 배수 입니다.');
} else if(number %3 ===0){
   console.log('3의 배수입니다.')
} else if(number %4 ===0){
   console.log('4의 배수입니다.')
}else if(number %5 ===0){
   console.log('5의 배수입니다.')
}else{
   console.log('2,3,4,5의 배수가 아닙니다.');
}

const englishDay = 'monday';

let koreanData;

switch(englishDay){
   case 'monday':
      koreanData='월요일';
      break;
   case 'tuesday':
      koreanData='화요일';
      break;
   case 'wednesday':
      koreanData='수요일';
      break;
   case 'thursday' :
      koreanData='목요일'
      break;
   case 'friday':
      koreanData='금요일';
      break;
   default:
      koreanData='주말';
      break;
}
console.log(koreanData);