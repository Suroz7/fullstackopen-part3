let data = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
const { request } = require('express')
const express = require('express')
const app = express()
app.use(express.json())
app.get('/api/persons',(request,response)=>{
    response.json(data)
})
app.get('/info',(request,response)=>{
    const len = data.length
    const date = new Date()
    const timezone = date.getTimezoneOffset()
    response.send(`The server has currently ${len} no of contacts <br/>
    ${date} ${timezone}`)
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
    const ids = data.map((data)=>data.id)
    const mid = Math.max(...ids)
    console.log(mid)
    const newId = Math.floor(Math.random()*((mid+5)-mid)+mid)
    const newperson = {...request.body,id:newId}
    data.push(newperson)
    response.status(200).json(newperson)


})
const PORT = 3001
app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
})