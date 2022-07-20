const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CALCULATOR PAGE");
});
app.get("/calculate", (req, res) => {
  res.send(
    "choose your operation and write in the URL: \n /sum \n /dif \n /multiply \n /div \n /percentage"
  );
});

app.get("/calculate/:operator/:a/:b", (req, res) => {
  var operator = req.params.operator;
  var a = parseInt(req.params.a);
  var b = parseInt(req.params.b);
  if (operator === "add") res.send((a + b).toString());
  else if (operator === "dif") res.send((a - b).toString());
  else if (operator === "multiply") res.send((a * b).toString());
  else if (operator === "div") res.send((a / b).toString());
  else if (operator === "percentage") res.send((a % b).toString());
  else res.send("No operator found");
});
app.listen(8000, () => {
  console.log("running on port 8000");
});
