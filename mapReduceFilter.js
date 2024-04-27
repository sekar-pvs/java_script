const arr= [1,2,3,4,5];

const multipleThree= arr.map((num)=>{
    return num*3;
})
console.log(multipleThree);

const greaterthan = arr.filter((num)=>{
    return num >= 3;
})
console.log(greaterthan);


//acc mean starting value , cur mean current element it's itterated value
const total = arr.reduce((acc,cur)=>{
    return acc+cur;
},0/* 0 is acc. acc mean starting value */)
console.log(total)