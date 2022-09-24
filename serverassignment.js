
const express = require('express');
const app = express()
app.get("/sum", (req, res) => {
    let sum = 1 + 2;
    res.send("1+2="+sum);

})
app.get("/mul", (req, res) => {
    let mul = 2 * 2;
    res.send(`2*2=${mul}`);
})
app.get("/sub", (req, res) => {
    let sub = 10 - 5;
    res.send(`10-5=${sub}`);
})
app.get("/div", (req, res) => {
    let div = 6 / 3;
    res.send(`6/3=${div}`);
})
app.get("/remainder",(req, res) => {
    let remainder=10%4;
    res.send(`10%4=${remainder}`);
})
app.listen(3000, () => {
    console.log('Server Starting up at: port:3000:');
}
)