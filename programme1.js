const evenodd = (arr)=>{ //function definition
  even =0,odd=0;
  arr.forEach(element => {
    element%2 ? odd++ : even++;
 
  });
     return{even,odd}
}
arr =[23,33,44,55,66,54]; // function call
console.log(evenodd(arr)); 