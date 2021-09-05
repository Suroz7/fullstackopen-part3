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
    return request.method==='POST'||request.method==='PUT' && JSON.stringify(request.body)
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

app.delete('/api/delete/:id',(request,response,next)=>{
    const id = request.params.id
    PhoneBook.findByIdAndDelete(id)
    .then((book)=>{
        if(book===null){
            return response.status(404).send('Not Found')
        }
        return response.status(200).json({msg:"Deleted"})
    })
    .catch((error)=>next(error))

})
app.post('/api/persons',(request,response,next)=>{
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
        response.status(200).json(result)
    }).catch(error=>next(error))
    
})
app.put('/api/persons/:id',(request,response)=>{
    const id = request.params.id
    console.log(id)
    console.log(request.body.name,request.body.number)
    PhoneBook.findById(id)
    .then(book=>{
        book.name=request.body.name
        book.number=request.body.number
        book.save()
    })
    .catch(err=>{
        return response.status(404).send('Not Found')
    })
    
})
const PORT = process.env.PORT||3001
app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
})
const errorHandler = (error,request,response,next)=>{
    console.log(error.messgae)
    if(error.name==='CastError'){
        return response.status(400).send({error:'Not valid ID'})
    }
    else if (error.name==='ObjeectId'){
        return response.status(400).send({error:'Not valid ID'})
    }
    else if(error.messgae==='ValidationError'){
        return response.status(400).send({error:error.message})
    }
    
    next(error)
}
app.use(errorHandler)