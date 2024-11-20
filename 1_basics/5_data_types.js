/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * [한개의 오브젝트 타입이있다.
 * 
 * 1)number 숫자
 * 2) string 문자열
 * 3) boolean 불리언
 * 4) undifined 정의 x
 * 5) null 널
 * 6) symbol 심볼
 * 
 * 7) object 객체
 *    function
 *    array
 *    object
 */
const age = 24;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log('----------');

const infinity = Infinity; //무한대?
const nInfinity = -Infinity;

console.log(infinity);
console.log(typeof nInfinity);
console.log('----------');
/**
 * string type
 */
const sin = '신명호';
console.log(typeof sin);

const sin2 = `'신명호'`;
console.log(sin2);

/**
 * template literal
 * 
 * escaping character
 * 1) newline -> \n
 * 2)tab -> \t
 * 3)백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const sin3 = '신\n명호';
console.log(sin3);
const sin4= '신\t명호';
console.log(sin4);
const sin5 = '신\\명호';
const sin6 ='\'신\'\t\'명\'\t\'호\''
console.log(sin6);
// 백틱 이거몰라서 엄청 헤맸다. 
const sin7 =`신명호
미친 놈`
console.log(sin7);

const sin8 = '신명호';
console.log(sin8 +' 미친놈');
console.log(`${sin8} 미친녀석`);
console.log('------------');
/**
 * Boolean 타입
 * 
 */
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 * 
 * 사용자가 선언만 하고 할당을 안한 상태?
 *  초기화를 안한 상태
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입 
 * js에서는 개발자가 명시적으로 값이 없다고 할당함.
 * 
 */

let init = null;

console.log(init);
console.log(typeof init); //원래는 null 타입이어야하는데
  //  object가 나옴 코팩의 말에 따르면
   // 버그라고 하는데 개발진들이 인정했다고함.
   // null이 오브젝트 타입인거에 기반해서 짜여진
   // 코드가 많아서 안고쳤다고 함.

/**
 * symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 symbol 함수를
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '2';
console.log(test1 ===test2);

const symbol = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol ===symbol2);
console.log(symbol);

/**
 * object type
 * 
 * Map
 * key : value 쌍으로 이루어져 있다.
 * 
 */
const dictionary = {
   red:'빨간색',
   orange:'주황색',
   yellow:'노란색',
};
console.log(dictionary);
console.log(dictionary.red);
console.log(dictionary['red']);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
const sMember=[
   '신명호',
   '반유현',
   '박준혁',
   '김지향',
];
console.log(sMember);
console.log(sMember[0]);
console.log(sMember[3]);

sMember[0] = '신뮝호';
console.log(sMember);
console.log(typeof sMember);

/**
 * statice typing -> 변수를 선언할 때 어떤 타입의 변수를 
 *                선언할지 명시한다.
 * dynamiv typing -> 변수의 타입을 명시적으로 선언하지 않는다.
 * 
 * JS -> dynamic typing 
 */ 