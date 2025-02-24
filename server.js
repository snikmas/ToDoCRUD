const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express();
const PORT = 3000 || process.req.PORT

// get(read) - post(create) - delete - update(put)
app.get('/', (req, res) => {
  res.send('working')
})

app.listen(PORT, () => {
  console.log('works')
})