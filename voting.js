var age=prompt("enter a number:")
if (age<18){
    console.log("voting is not eligible");
    }
else if(age>=18 && age<=60)
    console.log("eligible to vote");
else
    console.log("senior citizen");