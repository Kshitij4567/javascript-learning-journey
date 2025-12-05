bill = 0;
let units = Number(prompt("please enter units consumed last month"));
if(units<=100){
    bill= units*5;
    console.log(bill);
}
else if( units>100 && units<=200){
    bill = (100 * 5) + (units -100 ) * 7;
    console.log(bill)

}