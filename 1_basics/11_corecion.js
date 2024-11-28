/**
 * 타입 변환
 * 
 * 1) 명시적
 * 2) 암묵적
 * 
 */
let age=32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge,stringAge);

//암묵적
let test = age + ''; 
console.log(typeof test,test);

/**
 * string에는 곱하기 뺴는 개념이 없기때문에
 * 타입이 변환되어 넘버로 바뀜
 * +는 스트링으로 합쳐짐
 */
console.log('98'+2); //982
console.log('98'*2); // 196
console.log('98'-2); // 96
/** 
 * 명시적 변환
*/
console.log('--------');
console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'),parseInt('0')); // 정수 타입
console.log(typeof parseFloat('0.99'),parseFloat('0.99'));
console.log(typeof +'1',+'1');

/**
 * Boolean 타입으로의 변환
 */
console.log('----------------------');
console.log(!!'x');// true

console.log(!!'');//false
console.log(!!0); //false
console.log(!!'0');//true
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
console.log(!!{});
console.log(!![]);
/**
 * Boolean 타입 변환
 * 빈 스트링 false
 * 값이 있는 스트링 true
 * number 0 false
 * number true
 * null,undifined,false   false
 * true true
 * object,array는 무조건 true 값이 있는 없든
 */
/**
 * 1) 아무글자도 없는 Stirng
 * 2) 값이 없는 경우
 * 3) 숫자 0
 * 
 * 모두 false를 반환한다
 * 
 */
