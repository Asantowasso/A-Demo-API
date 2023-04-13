const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

// A get request
app.get('/electronics/MP3', (req, res) => {
  res.status(200).send({
    product:'Ipod',
    storage:'25gb'
  })

})

app.get('/electronics/TVs', (req, res) => {
  res.status(200).send({
    product:'Samsung',
    size:'42″'
  })

})

app.post('/electronics/:id', (req,res) =>{

const {id} = req.params;
const {logo} = req.body;

if (!logo) {
  res.status(418).send({message: 'We need a logo'})
}

res.send({
  electronics: `item with your ${logo} and ID of ${id}`,
})

});

app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)

//We will require middleware to create post requests 