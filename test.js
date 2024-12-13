/**
 * 콜백지옥을 해결하기 위해 프로미스가 나왔고
 * 더 깔끔하게 async await이 나왔다.
 */

// const fetchData = new Promise((resolve,reject)=>{
//    //비동기 작업 시행 
//    console.log('비동기 작업 시작');
//    setTimeout(()=>{
//       resolve('완료');
//       console.log('비동기 작업 완료');
//    },5000)
// })

// fetchData.then((data)=> {
//    console.log(data);
// })
const fetch2 = (number)=> new Promise((resolve, reject) => {
   setTimeout(()=>{
      resolve('end');
   },number)
})

fetch2(2000)
   .then((res)=>{
      console.log(res);
   })