const express =require("express");
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello World!')
})
app.get('/add/:num1/:num2', (req,res)=>{
    var num1 = parseInt(req.params.num1);
    var num2= parseInt(req.params.num2)
    sum=(num1+num2).toString();
    res.json({
        "sum" :sum 
    });
})
app.get('/substract/:num1/:num2', (req,res)=>{
    var num1 = parseInt(req.params.num1);
    var num2= parseInt(req.params.num2)
    substr=(num1-num2).toString();
    res.json({
        "substract" :substr 
    });
})
app.get('/multiply/:num1/:num2', (req,res)=>{
    var num1 = parseInt(req.params.num1);
    var num2= parseInt(req.params.num2)
    multiply=(num1*num2).toString();
    res.json({
        "multiply" :multiply 
    });
})
app.get('/division/:num1/:num2', (req,res)=>{
    var num1 = parseInt(req.params.num1);
    var num2= parseInt(req.params.num2)
    div=(num1/num2).toString();
    res.json({
        "division" :div 
    });
})
app.get('/percentage/:num1/:num2', (req,res)=>{
    var num1 = parseInt(req.params.num1);
    var num2= parseInt(req.params.num2)
    per=(num1%num2).toString();
    res.json({
        "percentage" :per 
    });
})
app.listen(3000, ()=>{
    console.log("running on port 3000")
})