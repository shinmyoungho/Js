/**
 * function Methods
 */

let mhMembers=[
   '명호',
   '지향',
   '유현',
   '준혁',
   '경민',
   '도윤',
];

console.log(mhMembers);
//push
console.log(mhMembers.push('태규'));
/**
 * push 함수는 새로운 값을 추가한 다음에
 * 추가된 array 길이를 반환한다.
 */
console.log(mhMembers); 

console.log('-----------');
//pop()
console.log(mhMembers.pop());
console.log(mhMembers);
/**
 * 요소 맨 뒤에 값을 삭제 후 반환한다.
 */
console.log('------------');
//shift()
console.log(mhMembers.shift());
console.log(mhMembers);
/**
 * 첫번째 요소를 삭제 후 왼쪽으로 요소가 한칸씩 밀린다
 * 그다음 첫번째 요소 반환
 */

console.log('---------');
// unshift()
console.log(mhMembers.unshift('명호'));
console.log(mhMembers);
/**
 * 어레이를 오른쪽으로 한칸 밀고 0번 인덱스에
 * 값을 추가한다. 추가한 후에 길이를 반환한다.
 * 
 */
// push == unshift  || pop == shift

console.log('--------------');
console.log(mhMembers.splice(0,3));
//splice -> 두개의 인자를 주고 첫번째 인자부터 
//두번쨰 인자 인덱스 전까지 자른다.
//인자를 하나만 주면 해당 인자부터 뒤에 요소를 다 자른다.
console.log(mhMembers);
//immutable programming
//한번 선언한 변수는 변경하지 않는다.

mhMembers=[
   '명호',
   '지향',
   '유현',
   '준혁',
   '경민',
   '도윤',
];
console.log(mhMembers);
console.log('----------');
//concat ->새로운 array를 반환해준다.
console.log(mhMembers.concat('태규')); 
console.log(mhMembers);

console.log('----------');

//slice()
console.log(mhMembers.slice(0,3))
console.log(mhMembers);

//spread operator

let mhMembers2=[
   ...mhMembers,
];
console.log(mhMembers2);

let mhMembers3=[
   mhMembers,
];
console.log(mhMembers3);

console.log('------------');
let mhMembers4 = mhMembers;
console.log(mhMembers4 === mhMembers);

console.log('------------');
//join -> 괄호 안의 문자대로 나눈다. string
console.log(mhMembers.join());
console.log(mhMembers.join('/'));
console.log(mhMembers.join(', '));

//sort()
//오름차순
console.log('--------');
console.log(mhMembers.sort());

console.log(mhMembers.reverse());

let numbers =[
   1,9,7,5,3,
];
console.log(numbers);

//a, b 를 비교했을때;
//1) a를 b보다 나중에 정렬하려면 0보다 큰 숫자를 반환
//2) a를 b 보다 먼저 정렬하려면 0보다 작은 숫자를 반환
//3) 원래 숫서를 그대로 두려면 0을 반환
numbers.sort((a,b)=>{
   return a-b; 
});
console.log(numbers);

numbers.sort((a,b)=>a > b ? -1 : 1); // 내림차순
console.log(numbers);

//map()
console.log(mhMembers.map((x)=>x));
console.log(mhMembers.map(x=>`용인: ${x}`));

console.log(mhMembers.map((x)=>{
   if(x==='지향'){
      return `직장인: ${x}`;
   }else{
      return `백수: ${x}`;
   }
}));

console.log(mhMembers);

console.log('----------');
// filter()
// true를 반환하는 값만 배열에 추가한다.
numbers = [1,8,7,6,4];
console.log((numbers.filter((x)=> x%2===0)).sort());

//find()
//첫번째로 해당되는 값만 반환 후 종료된다.
console.log(numbers.find((x)=> x%2===0));

//findIndex()
//첫번째로 해당되는 인덱스를 반환 후 종료된다.
console.log(numbers.findIndex((x)=> x%2===0));

// reduce()
console.log(numbers.reduce((p,n)=> p+n,0));

const arr =[1,2,3,4,5];

arr.reduce((acc,cur,idx,arr)=>{
   console.log(`누적 값: ${acc},현재 값: ${cur},인덱스 : ${idx} ?? : ${arr}`);
   return acc+cur;

},0)
console.log(arr);
/**
 * 원래 배열 원형을 바꾸는 함수
   * push -> 객체 길이 반환(마지막 인덱스에 요소 넣기)
   * pop -> 마지막 요소 반환
   * shift -> 첫번째 요소 반환
   * unshift -> 객체 길이 반환(0번째 인덱스에 요소 넣기)
   * splice ->  ex) splice(0,3) -> 0번째 인덱스부터 3번째 인덱스 전까지 배열을 자른다. 두개의 배열이 만들어짐
   * sort -> 오름차순 내림차순 가능
   *  - sort(a,b)
   *     return 값이 음수일 경우 a를 b앞으로 배치 요소 순서가 바뀌지 않음. (a,b)    a > b ? 1 : -1; 오름차순 a > b ? -1: 1 ; 내림차순 
   *     return 값이 양수일 경우 a를 b뒤로 배치 요소 순서가 바뀜                    a - b  오름차순     b - a 내림차순 
   *     return 값이 0일 경우 순서가 바뀌지 않음.   
   *reverse -> 내림차순
 *
 * 새로운 배열을 리턴하는 함수
 * concat -> push랑 기능은 같지만 새로운 배열을 리턴함
 * slice -> splice랑 마찬가지로 지정된 인덱스 범위를 잘라서 리턴함.
 * map() -> 기존 객체를 내 입맛대로 변형시켜서 리턴함. 근데 이게 모든 요소를 거친다.
 * filter -> filter(x=>x%2===0); return 값이 true일 경우 배열에 포함시켜서 리턴한다.
 * find  -> find(x=>x%2===0); return 값이 true일 경우 해당되는 첫번째 값만 리턴한다.
 * findIndex -> findIndex(x=>x%2===0); return 값이 true일 경우 해당되는 첫번째 인덱스 값만 리턴한다.
 * reduce => x.reduce((acc,cur,idx,arr)=>{
 *    return acc+curr
 *   },0)
 */