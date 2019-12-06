const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  axios.get("https://api.adviceslip.com/advice")
  .then( 
    //res => message = res.data.slip.advice
    res2 => {
      // console.log(res2.data)
      res.send(res2.data);
    }
  )
  .catch(err => console.log(err));
});


