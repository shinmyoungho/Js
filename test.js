let a = 1;
function outer(){
   let a = 100;
   function inner(){
      let a=3
      console.log(a);
      
   }
   inner();
   console.log(a);
}
outer();
console.log(a);