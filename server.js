const express = require('express');
const app = express();

const port = 5000;

app.use(express.static(__dirname + "/public"));

//set view engine to EJS
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    const dummyItem = [
      {
        name: "Lamboginhi",
        price: 2000
      },
      {
        name: "Bmw Supercar",
        price: 2000000
      },
      {
        name: "Nemo",
        price: 250145
      },
      {
        name: "Huawie",
        price: 985423
      }
    ];

    res.render('pages/listSmth', {localStorage:{carList: dummyItem}});
})

app.listen(port, () => {
    console.log(`Server currently running on port ${port}`);
})