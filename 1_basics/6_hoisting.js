/**
 * Hoisting
 */

console.log('hello');
console.log('World');
console.log('----------')

// console.log(name);
// var name='신명호';
// console.log(name);
/***
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼
 * 느껴지는? 현상? 
 */
// var name;
// console.log(name);
// name='명호';
// console.log(name);

console.log(name);
// let name ='명호';
/**
 * var는 호이스팅현상이 발생하는데
 * 실행 할 경우 undifined으로 오류가 발생하지 않음
 * 그러니까 에러를 잡기 어렵다?
 * 
 * let도 마찬가지로 호이스팅 현상이 발생하는데
 * 이건 오류를 잡아줌 
 * Cannot access 'name' before initialization
 * 선언을 아예하지 않은 경우랑 다른점은
 * 초기화 전에 사용할 수 없다 라는 오류를 보여줌
 * 선언을 아예하지 않은 경우는
 * name is not defined 정의되지않음의 오류가 남
 * 
 * const도 let과 마찬가지이다.
 * 호이스팅이 발생한다. 하지만 선언 하기 전에는 접근이
 * 불가하다.
 */