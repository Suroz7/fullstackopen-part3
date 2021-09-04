const mongoose = require('mongoose')
const url = `mongodb+srv://suroz:fullstack2020@cluster0.ttuc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
console.log(`trying to hookup with ${url}`)
mongoose.connect(url)
.then(res=>{
    console.log(`MongoDB Connected`)
})
.catch((err)=>{
    console.log(`Couldn't hookup with mongo db due to ${err.message}`)
})
const phoneBookschema = new mongoose.Schema({
    name:String,
    number:String
})

module.exports = mongoose.model('PhoneBook',phoneBookschema)