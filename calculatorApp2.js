const express =require("express");
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/:operator/:num1/:num2', (req,res)=>{
    var operator = req.params.operator
    var num1 = parseInt(req.params.num1);
    var num2= parseInt(req.params.num2)
 
   switch(operator){
    case'add':
    sum=(num1+num2).toString();
    res.json({
        "sum" :sum 
    });
    case'substract':
    sub=(num1-num2).toString();
    res.json({
        "substract" :sub 
    });
    case'multiply':
    multiply=(num1*num2).toString();
    res.json({
        "multiply" :multiply 
    });
    case'div':
    div=(num1/num2).toString();
    res.json({
        "div" :div 
    });
    case'percentage':
    percentage=(num1%num2).toString();
    res.json({
        "percentage" :percentage 
    });
   }

})

app.listen(3000, ()=>{
    console.log("running on port 3000")
})