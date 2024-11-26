/**
 * operators
 * 
 * 연산자
 */
/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺼셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 * 
 */
console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);
console.log(10%3);

console.log('---------');

console.log(10 * (10+10));

/**
 * 증가와 감소
 */

let number = 1;

number ++;
console.log(number);

number--;
console.log(number);

console.log('----------');

/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number ++;

console.log(result, number);

result = number --;
console.log(result,number);

result = ++number;
console.log(result,number);

result = --number;
console.log(result,number);

/**
 * 숫자 타입이 아닌 타입에 +,- 사용?
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample ='신명호';
//NaN-> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */
number =100;
console.log(number);
number +=10;
console.log(number);

number -= 10;
console.log(number);
number *= 10;
console.log(number);
number /=10;
console.log(number);
number %=10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5==5);
console.log(5=='5');
console.log(0=='');
console.log(true==1);
console.log(false==0);

console.log(5===5);
console.log(5==='5');

console.log('-----');

console.log(5!==5);
console.log(5!=='5');
console.log(0!=='');
console.log(true!==1);
console.log(false!==0);

console.log('-----');

console.log( 100 > 1);
console.log( 100 < 1);
console.log( 100 <= 1);
console.log( 100 >= 1);

/** 
 * 삼항 조건 연산자 (ternary operator)
 */

console.log(10>0 ? '메롱' : '뭬뭬롱');

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2 ||
 */

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-----');

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('-----');

console.log( 10 > 1 && 20 > 2);
console.log( 10 < 1 && 20 > 2);
console.log( 10 > 1 && 20 < 2);

console.log( 10 < 1 || 20 > 2);
console.log( 10 < 1 || 20 < 2);

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을떼 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측값 반환
 * ||를 사용했을때 좌측이 false면 우측값 반환
 * 
 */
console.log('------------');

console.log(true || '신명호');
console.log(false || '신명호');
console.log(false && '신명호');
console.log(true && '신명호');

console.log(true && false && '신명호');

/**
 * 지수 연산자
 */
console.log(2**2);
console.log(10**3);
/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '신명호';
//물음표 두개는 좌측 변수가 null 이거나 undefined이면
// 오른쪽 값을 반환해라 라는 의미
console.log(name);

name = name ?? '김지향';
console.log(name);

let name2;
name2 ??= '신명호';
console.log(name2);