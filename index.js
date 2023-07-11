const express = require("express");
const bodyparser = require("body-parser");

const app = express();

//app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyparser.json());

app.get('/form', (req, res, next) => {
    res.send(`<form method="POST" action="/wow">
    <input type="text" hidden name="username" value="Pohozhe">
    <input type="submit">
  </form>`);
  });

  app.post('/wow', function (req, res, next) {
    res.send(`<h1>${JSON.stringify(req.body)}</h1>`);
  });

app.get('/test', (req, res) => {
    res.send('Hello World!')
})



app.listen(process.env.PORT || 5005, () => { console.log(`Now server is listening on http://localhost:${process.env.PORT || 5005}`) });