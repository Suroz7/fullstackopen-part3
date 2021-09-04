const morgan = require('morgan')
const express = require('express')
const { response } = require('express')
const PhoneBook = require('./models/phonebook')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))
morgan.token('data',(request,response)=>{
    return request.method==='POST' && JSON.stringify(request.body)
})
app.use(morgan((token, request, response) => {
    return [
      token.method(request, response),
      token.url(request, response),
      token.status(request, response),
      token.res(request, response, 'content-length'), '-',
      token.data(request, response)
    ].join(' ')
  }))
app.get('/api/persons',(request,response)=>{
    PhoneBook.find({}).then(books=>{
        response.json(books.map(book=>book))
    })
})
app.get('/info',(request,response)=>{
    const date = new Date()
    const timezone = date.getTimezoneOffset()
    PhoneBook.find({}).then(book=>{
        response.send(`The server has currently ${book.length} no of contacts <br/>
        ${date} ${timezone}`)
})
})

app.get('/api/persons/:id',(request,response)=>{
    const id = parseInt(request.params.id)
    const contact = data.find((data)=>data.id ===id)
    if(!contact){
        response.status(404).send('The Person for given id is not found')
    }
    response.json(contact)
})

app.delete('/api/delete/:id',(request,response)=>{
    const id = parseInt(request.params.id)
    data = data.filter((data)=>data.id!==id)
    response.status(200).json(data)

})
app.post('/api/persons',(request,response)=>{
    if(!request.body.name){
      return  response.status(406).json({error:"Name is Required"})
    }
    if(!request.body.number){
       return  response.status(406).json({error:"Number is required"})
    }
    const newperson = new PhoneBook({
        name:request.body.name,
        number:request.body.number
    })
    newperson.save().then((result)=>{
        console.log(result)
        response.status(200).json(newperson)
    }).catch((error)=>{
        console.log(error)
        response.status(500).send('Sorry coulnt save')
    })   
    


})
const PORT = process.env.PORT||3001
app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
})