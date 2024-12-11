/**
 * Async /Await
 */

const getPromise = (seconds)=> new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve('완료');
   },seconds * 1000)
});

async function runner(){
   const result = await getPromise(1);
   console.log(result);
   const result2 = await getPromise(1);
   console.log(result2);
}


runner();
console.log('실행 끝');