const app = require('express')();
const PORT = 8080;

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

app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)