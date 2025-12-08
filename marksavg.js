// in this programme we find average of the marks of students
let marks =[];
for(i=0;i<5;i++){
    marks.push(Number(prompt("please enter marks of subject "+(i+1))))
}
console.log(marks)
let sum =0;
for(i=0;i<marks.length;i++){
      sum +=marks[i]
}
let avg = (sum/marks.length);
console.log("the average of your marks is " +avg)
if(avg>=90){
    console.log("Grade A");
}
else if(avg>=75 && avg<90){
    console.log("Grade B");
}
 else if(avg>=40 && avg<75){
    console.log("Grade C");
}
else{
    console.log("Sorry, You Failed The Examination");
}
