let marks = Number(prompt("please enter the marks you get in your examinations"))
if(marks<=90 && marks>80){
    console.log("grade A")
}
else if(marks<=80 && marks>70){
    console.log("Grade B")
}
else if(marks<=70 && marks>60){
    console.log("Grade C")
}
else{
    console.log("pass")
}