const express = require('express')
const app = express()
const port = 3000

const mongoose=require('mongoose');
mongoose.connect
('mongodb+srv://22thking:987654321@cluster0.wwuhp.mongodb.net/?retryWrites=true&w=majority'
, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(()=>{
    console.log('MongoDB Connected...');
}).catch(()=>{
    console.log(err);
})

app.get('/', (req, res) => {
  res.send('Hello World!~~안녕')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})